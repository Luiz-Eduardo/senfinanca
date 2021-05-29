import React, { useEffect } from "react";
import validate from "../Modal/validateInfo";
import useForm from "../../hooks/useForm";
import "./Form.css";

const Form = ({ submitForm, transaction }) => {
  const { handleChange, handleSubmit, values, errors, setValues } = useForm(
    submitForm,
    validate
  );

  useEffect(() => {
    if (transaction !== undefined) {
      setValues(transaction);
    }
  }, [setValues, transaction]);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        {transaction !== undefined ? (
          <h1>Edit your transaction here</h1>
        ) : (
          <h1>Add your transaction here</h1>
        )}
        <div className="form-inputs">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Enter the title"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Type</label>
          <select
            onChange={handleChange}
            value={values.type}
            className="form-input"
            name="type"
            id="type"
          >
            <option value="in"> In </option>
            <option value="out"> Out </option>
          </select>
        </div>
        <div className="form-inputs">
          <label className="form-label">Category</label>
          <input
            className="form-input"
            type="text"
            name="category"
            placeholder="Enter the category"
            value={values.category}
            onChange={handleChange}
          />
          {errors.category && <p>{errors.category}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Value</label>
          <input
            className="form-input"
            type="number"
            name="value"
            placeholder="Enter the amount"
            value={values.value}
            onChange={handleChange}
          />
          {errors.value && <p>{errors.value}</p>}
        </div>
        {transaction !== undefined ? (
          <button className="form-input-btn" type="submit">
            Edit Transaction
          </button>
        ) : (
          <button className="form-input-btn" type="submit">
            Add Transaction
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
