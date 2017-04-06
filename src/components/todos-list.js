import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    //lodash method to get all of the todos in props.todos
    return _.map(this.props.todos,

      //give each todo item a key so that React can iterate over it,
      //return a TodosListItem component for each todo in the todos array
      (todo, index) => <TodosListItem key={index}

      //spread syntax, still figuring out exactly how this works. 
      {...todo} {...props} />)
  }

//render the result of renderItems() in a table, along with the
//todosListHeader component at the top.
  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
