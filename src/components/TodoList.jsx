import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'
import TodoGroupContainer from '../containers/TodoGroupContainer'
import { Divider } from "antd";

class TodoList extends Component {
    render() {
        return (
            <div>
                <Divider orientation="center">Todo List</Divider>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;