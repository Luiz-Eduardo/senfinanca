import React from "react";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "../../context/Modal";
import TransactionContextProvider from "../../context/Transactions";
import EmptyPage from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function renderEmptyPage() {
  return render(
    <BrowserRouter>
      <TransactionContextProvider>
        <ModalContextProvider>
          <EmptyPage />
        </ModalContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
}

describe("EmptyPage Message", () => {
  test("Should have a message to add a transaction", () => {
    renderEmptyPage();

    expect(
      screen.getByText(
        "You still doesn't have a transaction, please add at least one"
      )
    ).toBeInTheDocument();
  });
});
