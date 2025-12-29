import UserContext from "./context/UserContext";
import Child from "./context/ChildComponent";
function UseContextExample() {
  return (
    <UserContext.Provider value="Muneeb">
      <Child />
    </UserContext.Provider>
  );
}
export default UseContextExample;
