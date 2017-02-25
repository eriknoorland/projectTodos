var classNames = require( 'classnames' );

import React, { Component } from 'react';
import Todo from './Todo';
import './css/List.css';

class List extends Component {
  render() {
    const modifierClass = 'todo__list--' + this.props.status;
    const classes = classNames('todo__list',  modifierClass);
    const todos = this.props.todos.filter(todo => todo.status === this.props.status);

    return (
      <div className={classes}>
        <h1 className="todo__list__title">
          {this.props.title} ({todos.length})
        </h1>

        {
          todos.map((todo, i) => <Todo key={todo.id} data={todo} updateStatus={this.props.updateStatus} />)
        }
      </div>
    );
  }
}

export default List;
