import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer'

class TodoGroup extends Component {
    render() {
        console.log(this.props.taskList);
        const todoItems = this.props.taskList.map((task) => (
            <TodoItemContainer key={task.id} task={task} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;