import React from "react";
import Class3_PropChild from "./Class3_PropChild";

class Class3_PropParent extends React.Component {
  state = {
    parentMessage: "Hello from Parent",
  };

  render() {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Parent Component
        </h1>
        <Class3_PropChild message={this.state.parentMessage} />
      </div>
    );
  }
}

export default Class3_PropParent;
