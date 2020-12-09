import React, { Component } from 'react';
import "./TodoItem.css"
import { updateTodoLabel, deleteTodo } from '../apis/todos';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from "uuid";
import TodoLabelContainer from "../containers/TodoLabelContainer"


class TodoItem extends Component {
    markTaskAsDone = () => {
        updateTodoLabel(this.props.task.id, { ...this.props.task, done: !this.props.task.done }).then(response => {
            this.props.markTaskAsDone(response.data);
        });
    };

    deleteTask = () => {
        deleteTodo(this.props.task.id).then(response => {
            this.props.deleteTask(response.data.id)
        })
    };

    addLabel = ({ key }) => {
        if (this.props.task.labels.includes(key)) { return; }
        updateTodoLabel(this.props.task.id, { ...this.props.task, labels: this.props.task.labels.concat(key) }).then(response => {
            this.props.addLabel(response.data);
        });
    }

    render() {
        const labels = ["Habbits", "Work", "School", "Rest"];
        const menu = (
            <Menu onClick={this.addLabel}>
                {labels.map((label) => (
                    <Menu.Item key={label}>
                        {label}
                    </Menu.Item>
                ))}
            </Menu>
        );
        const taskDoneStyle = this.props.task.done ? "task-done-style" : "";
        const todoLabels = this.props.task.labels.map((label) => (
            <TodoLabelContainer key={label} label={label} task={this.props.task} />));
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