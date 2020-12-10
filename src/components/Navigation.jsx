import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Badge } from 'antd';
import { UnorderedListOutlined, CheckSquareOutlined } from '@ant-design/icons';

class Navigation extends Component {
    render() {
        const totalTask = this.props.taskList.length;
        const doneTask = this.props.taskList.filter(task => task.done).length;

        return (
            <Menu mode="horizontal">
                <Menu.Item key="todo" icon={<UnorderedListOutlined />}>
                    <Badge count={totalTask - doneTask} offset={[10, 0]}>
                        <Link to="/">Todo List</Link>
                    </Badge>
                </Menu.Item>
                <Menu.Item key="done" icon={<CheckSquareOutlined />}>
                    <Badge count={doneTask} style={{ backgroundColor: '#52c41a' }} offset={[10, 0]}>
                        <Link to="/done">Task Done List</Link>
                    </Badge>
                </Menu.Item>
                <Menu.Item key="label" icon={<CheckSquareOutlined />}>
                    <Link to="/label">Label Manager</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;