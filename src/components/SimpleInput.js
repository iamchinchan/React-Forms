import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const checkValidity=(inputValue)=>{
  //   return inputValue.trim() !== "";
  // }
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid=true;
  }
  const formSubmitHandler = (event) => {
    setEnteredNameTouched(true);
    event.preventDefault();
    if (!enteredNameIsValid) {
      return; //basic validation
    }
    console.log("name is: ", enteredName); //imp work
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name cannot be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
