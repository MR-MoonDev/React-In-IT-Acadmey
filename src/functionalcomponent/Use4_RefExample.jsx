import { useRef } from "react";

function UseRefMultiple() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const focusName = () => {
    nameRef.current.focus();
  };

  const focusEmail = () => {
    emailRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4">
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className="border border-gray-400 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className="border border-gray-400 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex space-x-4 mt-2">
        <button
          onClick={focusName}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Focus Name
        </button>
        <button
          onClick={focusEmail}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Focus Email
        </button>
      </div>
    </div>
  );
}

export default UseRefMultiple;
