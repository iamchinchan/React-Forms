import useInputVal from "../customHooks/useInputValidity";
const SimpleInput = (props) => {
  const checkValidityName = (inputValue) => {
    return inputValue.trim() !== "";
  };
  const checkValidityEmail = (inputValue) => {
    return inputValue.includes("@");
  };

  const {
    enteredInput:nameInput,
    hasError:nameHasError,
    enteredInputIsValid:nameIsValid,
    resetInput:resetName,
    inputBlurHandler:nameBlurHandler,
    inputChangeHandler:nameChangeHandler,
  } = useInputVal(checkValidityName);
  const {
    enteredInput:emailInput,
    hasError:emailHasError,
    enteredInputIsValid:emailIsValid,
    resetInput:resetEmail,
    inputBlurHandler:emailBlurHandler,
    inputChangeHandler:emailChangeHandler,
  } = useInputVal(checkValidityEmail);

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    //check form validity in general
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return; //basic validation
    }
    console.log("name is: ", nameInput," and email is: ",emailInput); //imp work
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameInput}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameHasError && <p className="error-text">Name cannot be empty.</p>}
      </div>
      {/* email */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailHasError && <p className="error-text">Please provide a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
