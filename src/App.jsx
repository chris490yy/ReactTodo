import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './InputBox.jsx';
import TodoItems from './TodoItems.jsx';



let testData = [
                  {
                    task: 'eat dinner',
                    completed: false
                  },
                  {
                    task: 'buy some fruits',
                    completed: true
                  }
                ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : testData
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Todos</h1>
        <InputBox createTodo={this.createTodo.bind(this)}/>
        <TodoItems items={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}
        toggleTodo={this.toggleTodo.bind(this)}/>
      </div>
      );
  }

  createTodo(task) {
    this.state.todos.unshift({
      task: task,
      completed: false
    });
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTodo(task) {
    let index = this.state.todos.findIndex((todo) => {
      return todo.task === task;
    });
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  toggleTodo(task) {
    let todo = this.state.todos.find((todo) => {
      return todo.task === task;
    });
    todo.completed = !todo.completed;
    this.setState({
      todos: this.state.todos
    });
  }


}


export default App