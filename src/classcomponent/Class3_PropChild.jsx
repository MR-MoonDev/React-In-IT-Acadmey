import React from "react";

class Class3_PropChild extends React.Component {
  render() {
    return (
      <div className="p-4 m-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Child Component</h2>
        <p className="text-gray-600">Message from Parent: {this.props.message}</p>
      </div>
    );
  }
}

export default Class3_PropChild;
