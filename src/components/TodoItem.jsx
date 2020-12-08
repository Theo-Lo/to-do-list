import React, { Component } from 'react';

class TodoItem extends Component {
    markTaskAsDone = () => {
        this.props.markTaskAsDone(this.props.task.id);
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    render() {
        return (
            <div>
                <label onClick={this.markTaskAsDone}>{this.props.task.text}</label>
                <button onClick={this.deleteTask}>x</button>
            </div>
        );
    }
}

export default TodoItem;