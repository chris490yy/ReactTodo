import React from 'react';
import TodoItem from './TodoItem.jsx';


class TodoItems extends React.Component {
  render() {

    let items = this.props.items.map((item, index) => <TodoItem key = {index}
        {...item} {...this.props} />
    );
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default TodoItems;
