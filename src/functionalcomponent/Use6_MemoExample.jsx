import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount...");
    return count * 2;
  }, [count]); 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2>Count: {count}</h2>
      <h3>Double Count: {doubleCount}</h3>

      <div className="flex space-x-2">
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-1 rounded"
      />
    </div>
  );
}

export default UseMemoExample;
