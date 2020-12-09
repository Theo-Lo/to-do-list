import React, { Component } from 'react';
import "./TodoItem.css"
import { updateTodoLabel } from '../apis/todos';
import { Tag } from 'antd';


class TodoLabel extends Component {

    deleteLabel = () => {
        updateTodoLabel(this.props.task.id, {
            ...this.props.task, labels: this.props.task.labels.filter(label => label !== this.props.label)
        }).then(response => {
            this.props.removeLabel(response.data);
        });
    }

    chooseColor = () => {
        switch (this.props.label) {
            case "Habbits":
                return "lime";

            case "Work":
                return "red";

            case "School":
                return "blue";

            case "Rest":
                return "gold";

            default:
                return "magenta";
        }
    }

    render() {
        const color = this.chooseColor();
        return (
            <section>
                <Tag color={color} closable onClose={this.deleteLabel}>
                    {this.props.label}
                </Tag>
            </section>
        );
    }
}

export default TodoLabel;