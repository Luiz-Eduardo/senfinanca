import React from "react";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "../../context/Modal";
import TransactionContextProvider from "../../context/Transactions";
import GenericNotFoundPage from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function renderGenericNotFoundPage() {
  return render(
    <BrowserRouter>
      <TransactionContextProvider>
        <ModalContextProvider>
          <GenericNotFoundPage />
        </ModalContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
}

describe("GenericNotFoundPage Message", () => {
  test("Should have a 404 message", () => {
    renderGenericNotFoundPage();

    expect(screen.getByText("404 Page Not Found")).toBeInTheDocument();
  });
});
