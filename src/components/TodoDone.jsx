import React, { Component } from 'react';
import TodoDoneItemContainer from "../containers/TodoDoneItemContainer";
import { Divider } from "antd";

class TodoDone extends Component {
    render() {
        const todoItems = this.props.taskList.map((task) => (
            <TodoDoneItemContainer key={task.id} task={task} />));
        return (
            <div>
                <Divider orientation="center">Done List</Divider>
                {todoItems}
            </div>
        );
    }
}

export default TodoDone;