import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Buy some flowers"
      },
      {
        id: 2,
        content: "Play Mario's kart"
      }
    ]
  };

  deleteToDo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  addTodo = todo => {
    todo.id = Math.random();
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo list</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
