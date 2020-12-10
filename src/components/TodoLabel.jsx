import React, { Component } from 'react';
import "./TodoItem.css"
import { updateTodoLabel } from '../apis/todos';
import { Tag } from 'antd';


class TodoLabel extends Component {

    deleteLabel = () => {
        const labelIdList = this.props.task.labels.map(label => label.id).filter(id => id !== this.props.label.id);
        updateTodoLabel(this.props.task.id, { ...this.props.task, labelIdList: labelIdList }).then(response => {
            this.props.markTaskAsDone(response.data);
        });
    }

    render() {
        return (
            <section>
                <Tag color={this.props.label.color} closable onClose={this.deleteLabel}>
                    {this.props.label.label}
                </Tag>
            </section>
        );
    }
}

export default TodoLabel;