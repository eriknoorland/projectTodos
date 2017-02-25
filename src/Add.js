import React, { Component } from 'react';
import './css/Add.css';

class Add extends Component {
  constructor() {
    super();

    this.state = {
      prioritySelected: false
    };
  }

  handleCheckboxChange() {
    this.setState({
      prioritySelected: !this.state.prioritySelected
    });
  }

  add(event) {
    const todo = {
      description: this.refs.description.value,
      priority: this.refs.priority.checked
    };

    this.props.addTodo(todo);
    this.refs.description.value = '';
    this.setState({
      prioritySelected: false
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="todo__form">
        <form onSubmit={this.add.bind(this)}>
          <label>Description</label>
          <input type="text" ref="description" placeholder="Add ticket..." />
          <br />

          <label>Priority</label>
          <input type="checkbox" ref="priority" checked={this.state.prioritySelected} onChange={this.handleCheckboxChange.bind(this)} />
          <br />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Add;
