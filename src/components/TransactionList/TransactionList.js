import React, { useContext } from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { TransactionContext } from "../../context/Transactions";
import { ModalContext } from "../../context/Modal";
import "./TransactionList.css";

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const { setShowModal, setOption, setIndex } = useContext(ModalContext);

  const fields = [
    "ID",
    "Title",
    "Type",
    "Category",
    "Amount",
    "Creation date",
    "Actions",
  ];

  const openModal = (index) => {
    setIndex(index);
    setShowModal((prev) => !prev);
    setOption("edit");
  };

  const removeTransaction = (transactionToBeDeleted) => {
    setIndex();

    setTransactions(
      transactions.filter(
        (transaction, index) => index !== transactionToBeDeleted
      )
    );
  };

  return (
    <div>
      <h1 id="title">Transactions ({transactions.length})</h1>

      <table className="content-table">
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            const { title, category, type, value, date } = transaction;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>R$ {value}</td>
                <td>{date}</td>
                <td>
                  <button onClick={() => openModal(index)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => removeTransaction(index)}>
                    <FaWindowClose />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { TransactionList as default };
