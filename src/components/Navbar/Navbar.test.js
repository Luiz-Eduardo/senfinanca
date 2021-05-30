import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";
import ModalContextProvider from "../../context/Modal";
import { BrowserRouter } from "react-router-dom";
import TransactionContextProvider from "../../context/Transactions";

function renderNavbar() {
  return render(
    <BrowserRouter>
      <TransactionContextProvider>
        <ModalContextProvider>
          <Navbar />
        </ModalContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
}

describe("Navbar Logo", () => {
  test("Should have a logo", () => {
    renderNavbar();

    expect(screen.getByText("SenFinança")).toBeInTheDocument();
  });
});

describe("Navbar Filter Section", () => {
  test("Should have a visualize extract button", () => {
    renderNavbar();

    expect(screen.getByText("Visualize extract")).toBeInTheDocument();
  });
});

describe("Navbar Add Button", () => {
  test("Should have a add button", () => {
    renderNavbar();

    expect(screen.getByText("Add Transaction")).toBeInTheDocument();
  });
});
