import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Mario", age: 43, belt: "black", id: 1 },
      { name: "Mariarosa", age: 42, belt: "blue", id: 2 },
      { name: "Maria", age: 70, belt: "white", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
