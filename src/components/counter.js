import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((count) => count + 1);
  };
  const decrementHandler = () => {
    setCounter((count) => count - 1);
    console.log(count);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h1 className="card__title">Count : {count}</h1>
        <div className="card_btns">
          <button
            onClick={incrementHandler}
            disabled={count === 5 ? true : false}
            className="btn card__btn"
          >
            +
          </button>
          <button onClick={resetHandler} className="btn card__btn">
            0
          </button>
          <button
            onClick={decrementHandler}
            disabled={count === -5 ? true : false}
            className="btn card__btn"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
