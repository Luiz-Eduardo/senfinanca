import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";
import ModalContextProvider from "../../context/Modal";
import { BrowserRouter } from "react-router-dom";
import TransactionContextProvider from "../../context/Transactions";

function renderForm(transaction) {
  return render(
    <BrowserRouter>
      <TransactionContextProvider>
        <ModalContextProvider>
          <Form transaction={transaction} />
        </ModalContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
}

describe("Form Message", () => {
  test("Should have add transaction message", () => {
    renderForm(undefined);

    expect(screen.getByText("Add your transaction here")).toBeInTheDocument();
    expect(screen.getByText("Add Transaction")).toBeInTheDocument();
  });

  test("Should have edit transaction message", () => {
    let transaction = {
      title: "Fatura do cartão",
      type: "in",
      category: "mensal",
      value: "2.3",
    };

    renderForm(transaction);

    expect(screen.getByText("Edit your transaction here")).toBeInTheDocument();
    expect(screen.getByText("Edit Transaction")).toBeInTheDocument();
  });
});
