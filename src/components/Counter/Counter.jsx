import { useState } from "react";

const Counter = ({initialValue}) => {
   
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1)
  };

  return (
    <div>
      Counter: {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
