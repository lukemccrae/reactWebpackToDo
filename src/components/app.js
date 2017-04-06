import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

//hardcoded data for this tutorial. all of our data will be in this array.
const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
]

//initialize our App component. add it onto the React component object.
export default class App extends React.Component {
  constructor(props) {
    super(props);

    //set our todos array in state. this could be a db query if this was full stack.
    this.state = {
      todos
    }
  }


  render() {
    return (
      <div>
        <h1>Lukes React ToDo App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
          <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask = {this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }

  //the above render() renders the whole app! this is where it all happens.
  //line 35 assigns the todos array in state to the variable todos
  //36, 37, 38 all call their respective methods, binding this to them
  //this is bound to transfer accessibility of state object to called methods.

  toggleTask(task) {
    // when a todo task is clicked on, use _.find lodash method to find
    // the object in the todos array where the task names match
    const foundTodo = _.find(this.state.todos, todo => todo.task === task)

    //change the color of the todo based on its completion
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: this.state.todos})
  }

  //this function pushes a task into the todos array with an isCompleted value of false
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })

    //set state with updated todos array
    this.setState({ todos: this.state.todos})
  }

  //this function takes in the unedited and edited tasks, finds them and updates the todos array
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task = newTask;

    //set state with updated todos array
    this.setState({ todos: this.state.todos})
  }

  //this function removes taskToDelete from the todos array
  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete)
    this.setState({todos: this.state.todos});
  }

} //closing bracket
