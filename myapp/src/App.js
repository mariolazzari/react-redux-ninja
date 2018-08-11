import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas name="Mario" age="43" belt="Black" />
        <Ninjas name="Mariarosa" age="42" belt="Pink" />
      </div>
    );
  }
}

export default App;
