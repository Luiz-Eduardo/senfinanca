import React, { useState, useEffect } from "react";
import "./ExtractDatatable.css";

const Datatable = ({ data, title }) => {
  const columns = ["title", "type", "category", "value", "date"];
  const fields = ["Title", "Type", "Category", "Amount", "Creation date"];

  const [query, setQuery] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [searchColumns, setSearchColumns] = useState(["title"]);

  useEffect(() => {
    function search(query) {
      return data.filter((row) =>
        searchColumns.some(
          (column) =>
            row[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
            -1
        )
      );
    }

    setTransactions(search(query));
  }, [searchColumns, data, query]);

  return (
    <div>
      <h1>
        {title} ({transactions.length})
      </h1>
      <div className="filter">
        Filter:
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {columns &&
          columns.map((column, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {fields[index]}
            </label>
          ))}
      </div>

      <table className="content-table">
        <thead>
          <tr>
            {fields.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) =>
                column === "value" ? (
                  <td key={index}> R$ {row[column]} </td>
                ) : (
                  <td key={index}>{row[column]} </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
