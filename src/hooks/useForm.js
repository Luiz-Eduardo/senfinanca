import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "../context/Transactions";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    title: "",
    type: "in",
    category: "",
    value: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const { setTransactions } = useContext(TransactionContext);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const submitLocalStorage = () => {
        let transactions =
          JSON.parse(localStorage.getItem("transactions")) || [];

        if (values.index !== undefined) {
          transactions[values.index] = values;
        } else {
          values.date = Date(Date.now()).toString();
          transactions.push(values);
        }

        localStorage.setItem("transactions", JSON.stringify(transactions));
        setTransactions(transactions);
      };

      submitLocalStorage();
      callback();
    }
  }, [errors, callback, isSubmitting, values, setTransactions]);

  return { handleChange, handleSubmit, values, errors, setValues };
};

export default useForm;
