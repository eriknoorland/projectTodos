import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
  updateStatus(status) {
    this.props.updateStatus(this.props.data.id, status);
  }

  render() {
    const {description, priority, status} = this.props.data;
    const updateStatusPrev = this.updateStatus.bind(this, status === 'progress' ? 'open' : 'progress');
    const updateStatusNext = this.updateStatus.bind(this, status === 'open' ? 'progress' : 'done');

    return (
      <div className="todo__item">
        <p className="todo__item__description">
          {description}
        </p>

        <div className="todo__item__linkWrapper">
          <a className="todo__item__link todo__item__link--prev" onClick={updateStatusPrev}></a>
          <a className="todo__item__link todo__item__link--next" onClick={updateStatusNext}></a>
        </div>

        {priority && <span className="todo__item__priority">!</span>}
      </div>
    );
  }
}

export default Todo;
