import React from "react";

class Class4_Lifecycle extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Count: {this.state.count}</h1>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Class4_Lifecycle;
