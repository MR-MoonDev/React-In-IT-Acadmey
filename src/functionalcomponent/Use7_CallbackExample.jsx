import React, { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");
  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      Click Me
    </button>
  );
}

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2>Count: {count}</h2>
      <Child handleClick={increment} />
    </div>
  );
}

export default UseCallbackExample;
