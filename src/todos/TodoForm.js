import React, { Component } from 'react';

class TodoForm extends Component {
  state = { TodoValue: '', complete: false }

  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value })
    const { name, value } = e.target
                          // todoValue: 'user input'
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault() // stop reloading that loses user data
    // create crud action
    this.props.addTodo(this.state)
    // rest form
    this.setState({ todoValue: '' })
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.todovalue}
          name='todoValue'
          onChange={this.handleChange}

          required
          placeholder='Add a todo'
        />
      </form>
    )
  }
}

export default TodoForm;