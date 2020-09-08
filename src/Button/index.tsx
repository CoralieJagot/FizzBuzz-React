import React, { FunctionComponent, useState } from "react";

const Button: FunctionComponent = () => {
  const [fizzBuzzIndex, setFizzBuzzIndex] = useState(1);

  const getLabel = () => {
    if (fizzBuzzIndex % 3 === 0 && fizzBuzzIndex % 5 === 0) {
      return "Fizz Buzz";
    }
    if (fizzBuzzIndex % 3 === 0) {
      return "Fizz";
    }
    if (fizzBuzzIndex % 5 === 0) {
      return "Buzz";
    }
    return `${fizzBuzzIndex}`;
  };

  return (
    <>
      <button
        data-testid="Button"
        onClick={() => setFizzBuzzIndex(fizzBuzzIndex + 1)}
      >
        {getLabel()}
      </button>
    </>
  );
};

export default Button;
