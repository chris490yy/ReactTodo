import React from 'react';

class InputBox extends React.Component {

  render() {
    return (
      <div  className='new-todo'>
        <form onSubmit={this.handleCreate.bind(this)}>
          <input type='text' placeholder='What needs to be done?'
          ref='createTodo' className='input'/>
        </form>
      </div>

    );
  }

  handleCreate(event) {
    event.preventDefault();
    if(this.refs.createTodo.value.trim() !== ''){
      this.props.createTodo(this.refs.createTodo.value);
      this.refs.createTodo.value = '';
    }

  }
}

export default InputBox;
