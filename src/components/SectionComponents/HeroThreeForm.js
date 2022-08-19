import React, { useRef, useState } from "react";
import Input from "../Ui/Input";
import TheButton from "../Ui/TheButton";

const HeroThreeForm = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(enteredAmountNumber);

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
        input={{
          id: Math.random() * 10,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <TheButton type="submit">
        <i className="bi bi-plus"></i> Add
      </TheButton>
      {!amountIsValid && (
        <p>Input is invalid, Pleae Input a amount between 1 and 5</p>
      )}
    </form>
  );
};

export default HeroThreeForm;
