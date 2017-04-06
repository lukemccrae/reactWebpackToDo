import React from 'react';

//create component for new items on the list
export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  //this function determines how the tasks will be displayed in the table.
  renderTaskSection() {
    //put the task and isCompleted variables on the end of the this.props object
    const { task, isCompleted } = this.props;

    //object with ternary selector for color of task name
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    //if isEditing, return input box pre filled with text of task.
    //onSubmit, call onSaveClick method, binding this
    if(this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }

    //if !isEditing, return a <td> element with a style from taskStyle
    //onSubmit, call the toggleTask method, binding this, which will switch the color
    return (
        <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
          {task}
        </td>

    )
  }

  //this function renders the buttons that call their respective methods.
  renderActionsSection() {
    //if isEditing, return save/cancel
    if(this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    //if !isEditing, return edit/delete
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    )
  }

  //render the buttons defined above on the page!
  render() {
    return (
      <tr>
        <td>{this.renderTaskSection()}</td>
        {this.renderActionsSection()}
      </tr>
    );
  }

  //this function saves an edited task
  onSaveClick(event) {
    event.preventDefault();

    //task before edit
    const oldTask = this.props.task;

    //task after edit
    const newTask = this.refs.editInput.value;

    //call the saveTask method with oldTask and newTask
    this.props.saveTask(oldTask, newTask);

    //untoggle isEditing, changing state of the buttons
    this.setState({isEditing: false});
  }

  //this function toggles on isEditing
  onEditClick() {
    this.setState({isEditing: true});
  }

  //this function toggles off isEditing
  onCancelClick() {
    this.setState({isEditing: false})
  }

}; //ending bracket
