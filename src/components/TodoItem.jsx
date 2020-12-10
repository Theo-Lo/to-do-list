import React, { Component } from 'react';
import "./TodoItem.css"
import { updateTodoLabel, deleteTodo } from '../apis/todos';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import TodoLabelContainer from "../containers/TodoLabelContainer"


class TodoItem extends Component {
    markTaskAsDone = () => {
        const labelIdList = this.props.task.labels.map(label => label.id);
        updateTodoLabel(this.props.task.id, { ...this.props.task, done: !this.props.task.done, labelIdList: labelIdList }).then(response => {
            this.props.markTaskAsDone(response.data);
        });
    };

    deleteTask = () => {
        deleteTodo(this.props.task.id).then(() => {
            this.props.deleteTask(this.props.task.id)
        })
    };

    addLabel = ({ key }) => {
        if (this.props.task.labels.filter(label => label.id == key).length) { return; }

        const labelIdList = this.props.task.labels.map(label => label.id);
        updateTodoLabel(this.props.task.id, { ...this.props.task, labelIdList: labelIdList.concat(key) }).then(response => {
            this.props.markTaskAsDone(response.data);
        });
    }

    render() {
        const labels = this.props.labelList;
        const menu = (
            <Menu onClick={this.addLabel}>
                {labels.map((label) => (
                    <Menu.Item key={label.id}>
                        {label.label}
                    </Menu.Item>
                ))}
            </Menu>
        );
        const taskDoneStyle = this.props.task.done ? "task-done-style" : "";
        const todoLabels = this.props.task.labels.map((label) => (
            <TodoLabelContainer key={label.label} label={label} task={this.props.task} />));
        return (
            <div style={{ width: "100%" }} >
                <div className="box" >
                    <label style={{ float: "left" }} className={taskDoneStyle} >{this.props.task.text}</label>
                    <Button className="button-to-right" type="text" onClick={this.deleteTask} icon={<DeleteOutlined />} />
                    <Button className="button-to-right" type="text" onClick={this.markTaskAsDone} icon={<CheckCircleOutlined />} />
                    <Dropdown overlay={menu}>
                        <Button className="button-to-right">
                            Add label: <DownOutlined />
                        </Button>
                    </Dropdown>
                    <div className="button-to-right">
                        {todoLabels}
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoItem;