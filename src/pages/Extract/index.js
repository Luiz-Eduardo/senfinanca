import React, { useContext } from "react";
import { Content } from "../../globalStyles";
import { TransactionContext } from "../../context/Transactions";
import Datatable from "../../components/ExtractDatatable/ExtractDatatable";
import EmptyPage from "../EmptyPage/";
import "./Extract.css";

const Extract = () => {
  const { transactions } = useContext(TransactionContext);

  let transactionsIn = transactions.filter(
    (transaction) => transaction.type === "in"
  );

  let transactionsOut = transactions.filter(
    (transaction) => transaction.type === "out"
  );

  // eslint-disable-next-line no-extend-native
  Array.prototype.sum = function (prop) {
    let total = 0;

    for (let i = 0; i < this.length; ++i) {
      total += parseFloat(this[i][prop]);
    }

    return total;
  };

  let accountBalance =
    transactionsIn.sum("value") - transactionsOut.sum("value");

  return (
    <Content>
      {transactions.length > 0 ? (
        <div>
          {transactionsIn.length > 0 ? (
            <Datatable
              data={transactionsIn}
              title="Inbound Transactions"
            ></Datatable>
          ) : null}

          {transactionsOut.length > 0 ? (
            <Datatable
              title="Outbound Transactions"
              data={transactionsOut}
            ></Datatable>
          ) : null}

          <h1>Total da conta: R$ {accountBalance}</h1>
        </div>
      ) : (
        <EmptyPage />
      )}
    </Content>
  );
};

export default Extract;
