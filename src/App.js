import React, { Component } from 'react';
import Add from './Add';
import List from './List';

const StatusTypes = {
  OPEN: 'open',
  PROGRESS: 'progress',
  DONE: 'done'
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {id: '1', description: 'css markup item', status: StatusTypes.OPEN, priority: false},
        {id: '2', description: 'css markup list', status: StatusTypes.OPEN, priority: false},
        {id: '3', description: 'js code', status: StatusTypes.PROGRESS, priority: true},
        {id: '4', description: 'project setup', status: StatusTypes.DONE, priority: false}
      ]
    };
  }

  addTodo(todo) {
    const todos = this.state.todos.map(todo => Object.assign({}, todo));
    todo.id = todos.length + 1;
    todo.status = StatusTypes.OPEN;
    todos.push(todo);
    this.setState({todos: todos});
  }

  updateStatus(id, status) {
    const todos = this.state.todos.map(todo => Object.assign({}, todo));
    const todo = todos[todos.findIndex(todo => todo.id === id)];
    todo.status = status;
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="todo__app">
        <Add addTodo={this.addTodo.bind(this)} />

        <List
          title="Open"
          status={StatusTypes.OPEN}
          todos={this.state.todos}
          updateStatus={this.updateStatus.bind(this)} />

        <List
          title="In Progress"
          status={StatusTypes.PROGRESS}
          todos={this.state.todos}
          updateStatus={this.updateStatus.bind(this)} />

        <List
          title="Done"
          status={StatusTypes.DONE}
          todos={this.state.todos}
          updateStatus={this.updateStatus.bind(this)} />
      </div>
    );
  }
}

export default App;
