import {useState} from 'react';

const useInput=(checkValidity)=>{

    const [inputValue,setInputValue]= useState('');
    const [inputTouched,setInputTouched]=useState(false);

    const inputIsValid = checkValidity(inputValue);
    const inputHasError = inputTouched && !inputIsValid;

    const inputChangeHandler=(event)=>{
        setInputValue(event.target.value)
    }
    const inputBlurHanlder=()=>{
        setInputTouched(true);
    }
    const inputReset=()=>{
        setInputValue("");
        setInputTouched(false);
    }
    return{
        inputValue,
        inputReset,
        inputIsValid,
        inputChangeHandler,
        inputBlurHanlder,
        inputHasError,
    }
}
export default useInput;