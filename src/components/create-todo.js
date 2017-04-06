import React from 'react';

export default class TodosList extends React.Component {
    //its is bad form to have state in a nested component; state should only be changed at root level, in this case in app.js

    //this state handles whether or not an error exists.
    constructor(props) {
      super(props);
      this.state = {
        error: null
      }
    }

    //if !error, this function returns a null value.
    //if error, it returns a div with the error text.
    renderError() {
      if(!this.state.error) {
        return null;
      }
        return <div style={{color:'red'}}>{this.state.error}</div>;
    }

    //render an input box. onSubmit, call the the handleCreate function, binding the input.
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do"
        ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  };

  //this function creates a todo
  handleCreate(event) {

    event.preventDefault();

    //
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task)

    //if validateInput() returns an error message string, set state with the error message
    if(validateInput) {
      this.setState({error: validateInput})
      return;
    }

    //if !validateInput, run the following code

    //set error back to null
    this.setState({ error: null })

    //call createTask method with the task!
    this.props.createTask(task)

    //reset input field
    this.refs.createInput.value = '';
  }

  //this function validates the input, returning either an error message or null
  validateInput(task) {

    //if blank input, return error string
    if(!task) {
      return 'Please enter a task'

      //this lodash method searches for task name match. if found, return error string
    } else if(_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exists'
    } else {

      //if there is a task and it doesnt repeat, return null! 
      return null;
    }
  }
};
