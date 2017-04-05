import _ from 'lodash'
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class CreateTodo extends React.Component {

  render() {
    console.log(this.props.todos);
    return (
      <form>
        <input type="text" placeholder="What do I need to do" />
        <button>Create</button>
      </form>
    );
  };
};
