import React, { useContext } from "react";
import { ModalContext } from "../../context/Modal";
import { GlobalStyle } from "../../globalStyles";
import Modal from "../Modal/Modal";
import { Nav, NavLink, Bars, NavMenu, Btn, BtnLink } from "./NavbarElements";

const Navbar = () => {
  const { setShowModal, setOption } = useContext(ModalContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
    setOption("add");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>SenFinança</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/extract">Visualize extract</NavLink>
        </NavMenu>
        <Btn onClick={openModal}>
          <BtnLink>Add Transaction</BtnLink>
          <GlobalStyle />
        </Btn>
        <Modal />
      </Nav>
    </>
  );
};

export default Navbar;
