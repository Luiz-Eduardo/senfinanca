import { useState, createContext } from "react";

export const ModalContext = createContext();

function ModalContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [option, setOption] = useState("add");
  const [index, setIndex] = useState();

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, option, setOption, index, setIndex }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
