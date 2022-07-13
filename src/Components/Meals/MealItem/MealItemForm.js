import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React, { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('clicked');
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '20',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please add a valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
