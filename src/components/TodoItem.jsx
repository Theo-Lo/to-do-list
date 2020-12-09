import React, { Component } from 'react';
import "./TodoItem.css"
import { updateTodo, deleteTodo } from '../apis/todos';

class TodoItem extends Component {
    markTaskAsDone = () => {
        updateTodo(this.props.task.id, {...this.props.task, done:!this.props.task.done}).then(response => {
            this.props.markTaskAsDone(response.data);
        });
    };

    deleteTask = () => {
        deleteTodo(this.props.task.id).then(response=>{
            this.props.deleteTask(response.data.id)
        })
    };

    render() {
        const taskDoneStyle = this.props.task.done ? "task-done-style" : "";
        return (
            <div>
                <span onClick={this.markTaskAsDone} className={taskDoneStyle}>{this.props.task.text}</span>
                <button onClick={this.deleteTask}>x</button>
            </div>
        );
    }
}

export default TodoItem;