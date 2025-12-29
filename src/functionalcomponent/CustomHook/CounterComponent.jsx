import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2>Count: {count}</h2>
      <div className="flex space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
}

export default CounterComponent;
