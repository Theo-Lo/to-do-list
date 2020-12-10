import React, { Component } from 'react';
import { getTodoList } from '../apis/todos';
import { getLabelList } from '../apis/labels';
import TodoItemContainer from '../containers/TodoItemContainer'
import "./TodoItem.css"

class TodoGroup extends Component {
    componentDidMount() {
        getTodoList().then(response => {
            this.props.initTodoList(response.data);
        });
        getLabelList().then(response => {
            this.props.initLabelList(response.data);
        });
    }

    render() {
        console.log(this.props.taskList);
        const todoItems = this.props.taskList.map((task) => (
            <TodoItemContainer className="todo-container" key={task.id} task={task} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;