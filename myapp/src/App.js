import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Mario", age: 43, belt: "black", id: 1 },
      { name: "Mariarosa", age: 42, belt: "blue", id: 2 },
      { name: "Maria", age: 70, belt: "white", id: 3 }
    ]
  };

  /**
   * Add new ninja
   */
  addNinja = ninja => {
    ninja.id = Math.random();
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    });
  };

  /**
   * Delete selected ninja
   */
  deleteNinja = id => {
    const filtered = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: filtered
    });
  };

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
