import React, { useContext } from "react";
import { TransactionContext } from "../../context/Transactions";
import { Content } from "../../globalStyles";
import TransactionList from "../../components/TransactionList/TransactionList";
import EmptyPage from "../EmptyPage/";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <Content>
      {transactions.length > 0 ? <TransactionList /> : <EmptyPage />}
    </Content>
  );
};

export default Dashboard;
