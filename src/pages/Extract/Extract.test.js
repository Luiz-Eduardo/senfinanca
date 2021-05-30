import React from "react";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "../../context/Modal";
import TransactionContextProvider from "../../context/Transactions";
import Extract from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function renderTransaction() {
  return render(
    <BrowserRouter>
      <TransactionContextProvider>
        <ModalContextProvider>
          <Extract />
        </ModalContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
}

afterAll(() => {
  global.Storage.prototype.getItem.mockReset();
});

describe("Extract Page", () => {
  test("Should have a message to add a transaction", () => {
    renderTransaction();

    expect(
      screen.getByText(
        "You still doesn't have a transaction, please add at least one"
      )
    ).toBeInTheDocument();
  });

  test("Should have a Inbound transactions text", () => {
    global.Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(
        '[{"title":"Salário","type":"in","category":"mensal","value":"3000","date":"Sat May 29 2021 22:54:39 GMT-0300 (Horário Padrão de Brasília)"}]'
      );

    renderTransaction();
    expect(screen.getByText("Inbound Transactions (1)")).toBeInTheDocument();
  });

  test("Should have a Inbound transactions text", () => {
    global.Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(
        '[{"title":"Salário","type":"out","category":"mensal","value":"3000","date":"Sat May 29 2021 22:54:39 GMT-0300 (Horário Padrão de Brasília)"}]'
      );

    renderTransaction();
    expect(screen.getByText("Outbound Transactions (1)")).toBeInTheDocument();
  });

  test("Should have a Inbound and Outbound transactions text", () => {
    global.Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(
        '[{"title":"Salário","type":"out","category":"mensal","value":"3000","date":"Sat May 29 2021 22:54:39 GMT-0300 (Horário Padrão de Brasília)"},' +
          '{"title":"Salário","type":"in","category":"mensal","value":"3000","date":"Sat May 29 2021 22:54:39 GMT-0300 (Horário Padrão de Brasília)"}]'
      );

    renderTransaction();
    expect(screen.getByText("Inbound Transactions (1)")).toBeInTheDocument();
    expect(screen.getByText("Outbound Transactions (1)")).toBeInTheDocument();
  });
});
