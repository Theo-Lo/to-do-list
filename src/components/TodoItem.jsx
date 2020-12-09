import React, { Component } from 'react';
import "./TodoItem.css"

class TodoItem extends Component {
    markTaskAsDone = () => {
        this.props.markTaskAsDone(this.props.task.id);
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    render() {
        const taskDoneStyle = this.props.task.done ? "taskDoneStyle" : "";
        return (
            <div>
                <span onClick={this.markTaskAsDone} className={taskDoneStyle}>{this.props.task.text}</span>
                <button onClick={this.deleteTask}>x</button>
            </div>
        );
    }
}

export default TodoItem;