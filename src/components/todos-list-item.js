import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  renderTaskSection() {
    //this syntax allows you to put the task and isCompleted variables on the end of the this.props object
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    if(this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }

    //could be here
    return (
        <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
          {task}
        </td>

    )
  }


renderActionsSection() {
  if(this.state.isEditing) {
    return (
      <td>
        <button onClick={this.onSaveClick.bind(this)}>Save</button>
        <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
      </td>
    )
  } return (
    <td>
      <button onClick={this.onEditClick.bind(this)}>Edit</button>
      <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
    </td>
  )
}

  render() {
    return (
      //could be here
      <tr>
        <td>{this.renderTaskSection()}</td>
        {this.renderActionsSection()}
      </tr>
    );
  }

//what is event doing here? is it related to this?
  onSaveClick(event) {
    event.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing: false});
  }

  onEditClick() {
    this.setState({isEditing: true});
  }


  onCancelClick() {
    this.setState({isEditing: false})
  }

}; //ending bracket
