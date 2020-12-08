import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer'
import { v4 as uuidv4 } from 'uuid';

class TodoGroup extends Component {
    render() {
        const todoItems = this.props.taskList.map((task) => (
            <TodoItemContainer key={uuidv4()} task={task} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;