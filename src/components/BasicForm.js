import { useState } from "react";
import useInput from "../customHooks/useInput";
const BasicForm = (props) => {
  const checkValidityName = (inputValue) => {
    return inputValue.trim() !== "";
  };
  const checkValidityEmail = (inputValue) => {
    return inputValue.includes("@");
  };
  const {
    inputValue: nameValue,
    inputReset: nameReset,
    inputIsValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHanlder: nameBlurHandler,
    inputHasError: nameHasError,
  } = useInput(checkValidityName);
  const {
    inputValue: lnameValue,
    inputReset: lnameReset,
    inputIsValid: lnameIsValid,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHanlder: lnameBlurHandler,
    inputHasError: lnameHasError,
  } = useInput(checkValidityName);
  const {
    inputValue: emailValue,
    inputReset: emailReset,
    inputIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHanlder: emailBlurHandler,
    inputHasError: emailHasError,
  } = useInput(checkValidityEmail);

  let formIsValid = false;
  if (nameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !lnameIsValid || !emailIsValid) {
      return;
    }
    console.log(
      "name is: ",
      nameValue,
      " and lname is :",
      lnameValue,
      " and email is: ",
      emailValue
    ); //imp work
    nameReset();
    lnameReset();
    emailReset();
  };
  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const lnameClasses = lnameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p className="error-text">First Name cannot be empty.</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lnameValue}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameHasError && <p className="error-text">Last Name cannot be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
          {emailHasError && <p className="error-text">Please provide a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
