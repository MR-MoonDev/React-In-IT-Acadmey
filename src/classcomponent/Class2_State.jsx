import React from "react";

class Class2_State extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Count: {this.state.count}</h1>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Class2_State;
