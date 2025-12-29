import UserContext from "./context/UserContext";
import Child from "./context/ChildComponent";

function UseContextExample() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <UserContext.Provider value="Muneeb">
        <div className="p-6 bg-white rounded shadow">
          <h1 className="text-xl font-semibold mb-4">useContext Example</h1>
          <Child />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default UseContextExample;
