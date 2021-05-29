import { useState, createContext, useEffect } from "react";

export const TransactionContext = createContext();

function TransactionContextProvider(props) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    setTransactions(transactions);
  }, [setTransactions]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;
