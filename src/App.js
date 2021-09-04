import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log(12);
  };
  minus = () => {};
  render() {
    return (
      <div>
        <h1>number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
