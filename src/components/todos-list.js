import _ from 'lodash'
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) =>
  <TodosListItem key={index} {...todo} />)
  }

  render() {
    console.log(this.props.todos);
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems}
        </tbody>
      </table>
    );
  };
};
