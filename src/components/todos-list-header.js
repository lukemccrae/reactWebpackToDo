import React from 'react';

export default class TodosListHeader extends React.Component {
  render() {
    //task and action header names. simple component. 
    return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
    );
  }
}
