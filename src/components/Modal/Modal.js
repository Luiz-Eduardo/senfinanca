import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { TransactionContext } from "../../context/Transactions";
import { useSpring, animated } from "react-spring";
import { Background, ModalWrapper, CloseModalButton } from "./ModalElements";
import Form from "../Form/Form";
import { ModalContext } from "../../context/Modal";

export const Modal = () => {
  const { showModal, setShowModal, option, index } = useContext(ModalContext);

  const modalRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { transactions } = useContext(TransactionContext);

  let transaction = {};

  if (index !== undefined) {
    transaction = transactions[index];

    transaction.index = index;
  }

  function submitForm() {
    setIsSubmitted(true);
    setShowModal(false);
    setIsSubmitted(false);
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setIsSubmitted(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        setIsSubmitted(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <div className="form-container">
                <CloseModalButton
                  onClick={() => {
                    setShowModal((prev) => !prev);
                    setIsSubmitted(false);
                  }}
                >
                  ×
                </CloseModalButton>
                <div className="form-content-left"></div>
                {!isSubmitted ? (
                  option === "add" ? (
                    <Form submitForm={submitForm} />
                  ) : (
                    <Form submitForm={submitForm} transaction={transaction} />
                  )
                ) : (
                  setShowModal((prev) => !prev)
                )}
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
