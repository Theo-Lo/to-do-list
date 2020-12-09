import React, { Component } from 'react';
import { getTodoList } from '../apis/todos';
import TodoItemContainer from '../containers/TodoItemContainer'

class TodoGroup extends Component {
    componentDidMount() {
        getTodoList().then(response => {
            this.props.initTodoList(response.data);
        });
    }

    render() {
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