import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

let id = 0;
const Todo = props => (
  <li className="todo">
    <table width="100%" style={{ textAlign: "left" }}>
      <tr>
        <td style={{ whiteSpace: "nowrap" }}>
          <input type="checkbox" id="slide" />
        </td>
        <td width="99%">
          <span className="todo">{props.todo.text}</span>
        </td>
        <td style={{ whiteSpace: "nowrap" }}>
          <button className="btn btn-sm btn-danger" onClick={props.onDelete}>
            <i className="fa fa-delete" />
          </button>
        </td>
      </tr>
    </table>
  </li>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  newTodo = () => {
    const text = prompt("Enter the TODO text");
    this.setState({
      todos: [...this.state.todos, { id: id++, text }]
    });
  };
  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  render() {
    return (
      <div style={styles}>
        <div className="top">
          <button className="btn btn-primary" onClick={this.newTodo}>
            + Add
          </button>
        </div>
        <ul id="todos" type="none">
          {this.state.todos.map(todo => (
            <Todo onDelete={() => this.deleteTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
