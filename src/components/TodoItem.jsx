import React, { Component } from 'react';

class TodoItem extends Component {
    markTaskAsDone = () => {
        this.props.markTaskAsDone(this.props.task.id);
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    render() {
        const isTaskDone = {
            textDecorationLine: this.props.task.done ? 'line-through' : ''
        };
        return (
            <div>
                <span onClick={this.markTaskAsDone} style={isTaskDone}>{this.props.task.text}</span>
                <button onClick={this.deleteTask}>x</button>
            </div>
        );
    }
}

export default TodoItem;