import  { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2>Count: {state.count}</h2>
      <div className="flex space-x-4">
        <button onClick={() => dispatch({ type: "increment" })} className="px-4 py-2 bg-green-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerExample;
