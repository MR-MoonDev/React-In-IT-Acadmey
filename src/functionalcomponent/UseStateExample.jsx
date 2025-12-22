// const [state, setState] = useState(initialValue);

// state → current value
// setState → value change function
// initialValue → starting value

import { useState } from "react";

function UseStateExample() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    const increase = () => {

        // setCount(count + 1);
        // setCount(count + 1);
        // console.log("After normal update (same render):", count);

        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);
        // console.log("After prev update (same render):", count);
    };

    const decrease = () => {
        setCount((prev) => prev - 1);
    };


    const toggel = () => {
        setShow(!show)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">

                {/* Counter */}

                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Counter</h2>
                    <p className="text-3xl font-bold">{count}</p>
                    <button
                        onClick={increase}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Increase
                    </button>
                    <button
                        onClick={decrease}
                        className="mt-2 ml-1 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                        Decrease
                    </button>
                </div>

                {/* Name Input */}

                <div>
                    <h2 className="text-xl font-semibold mb-2">Name Input</h2>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="mt-2 text-gray-700">Name: {name}</p>
                </div>

                {/* Toggle */}

                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Toggle</h2>
                    <button
                        onClick={toggel}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Toggle
                    </button>
                    <div className="text-center mt-2">
                        <span className={`px-3 py-1 rounded font-semibold ${show ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                            }`}>
                            {show ? "On" : "Off"}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UseStateExample;
