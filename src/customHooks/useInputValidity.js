import { useState } from "react";
const useInputVal = (checkValidity) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputIsValid = checkValidity(enteredInput);
  const hasError = enteredInputTouched && !enteredInputIsValid;

  const resetInput = () => {
    setEnteredInput("");
    setEnteredInputTouched(false);
  };

  const inputBlurHandler = () => {
    setEnteredInputTouched(true);
  };
  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };
  return {
    enteredInput,
    hasError,
    enteredInputIsValid,
    resetInput,
    inputBlurHandler,
    inputChangeHandler,
  };
};

export default useInputVal;
