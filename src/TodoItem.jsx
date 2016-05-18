import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class TodoItem extends React.Component {
    render() {
      if(this.props.completed){
        return (
          <li className='TodoItem'>
              <input className="toggle" type="checkbox"
                  checked={this.props.completed}
                  onChange={this.handleToggle.bind(this)}
                />
            <label className='completed'>{this.props.task}</label>
            <span className="glyphicon glyphicon-remove delete" onClick={this.handleDelete.bind(this)} />
          </li>
        );
      }
      return (
          <li className='TodoItem'>
              <input className="toggle" type="checkbox"
                  checked={this.props.completed}
                  onChange={this.handleToggle.bind(this)}
                />
            <label>{this.props.task}</label>
            <span className="glyphicon glyphicon-remove" onClick={this.handleDelete.bind(this)} />
          </li>
        );


    }

    handleDelete() {
      this.props.deleteTodo(this.props.task);
    }

    handleToggle() {
      this.props.toggleTodo(this.props.task);
    }
}

export default TodoItem;
