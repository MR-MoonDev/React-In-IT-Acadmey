import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-2xl font-semibold">Count: {data}</h1>

      <button
        onClick={() => setData(data + 1)}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Update Data
      </button>
    </div>
  );
};

export default UseEffectExample;
