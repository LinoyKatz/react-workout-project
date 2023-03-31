import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  //functions for the form that the user is filling
  const resetForm = () => {
    setInputValues(initialState);
  };

  const handleChange = ({ target }) => {
    let value =
      target.name === "isPaid"
        ? target.checked
        : target.name === "date"
        ? target.value.valueAsNumber
        : target.value;

    setInputValues({
      ...inputValues,
      [target.name]: value,
    });
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
  };

  return {
    inputValues,
    handleChange,
    resetForm,
    setForm,
  };
};
