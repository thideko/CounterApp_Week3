import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrease1 = () => {
    setCount(count + 1);
  };

  const handleIncrease2 = () => {
    setCount(count + 2);
  };

  const handleDecrease1 = () => {
    setCount((c) => Math.max(c - 1, 0));
  };

  const handleDecrease2 = () => {
    setCount((c) => Math.max(c - 2, 0));
  };

  return (
    <div className="Counter">
      <div className="display"> {count} </div>
      <button className="add" onClick={handleIncrease1}>
        {" "}
        Plus 1{" "}
      </button>
      <button className="add" onClick={handleIncrease2}>
        {" "}
        Plus 2{" "}
      </button>{" "}
      <br />
      <button className="minus" onClick={handleDecrease1}>
        {" "}
        Minus 1{" "}
      </button>
      <button className="minus" onClick={handleDecrease2}>
        {" "}
        MInus 2{" "}
      </button>
    </div>
  );
}
