import { useState } from "react";

const useForms = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const reset = () => {
    setFormValues(initialState);
  };
  const customReset = (state) => {
    setFormValues(state);
  };
  const customValues = (customValues) => {
    setFormValues({
      ...formValues,
      ...customValues,
    });
  };
  return [formValues, handleOnChange, reset, customReset, customValues];
};

export default useForms;
