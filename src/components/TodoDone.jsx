import React, {Component} from 'react';
import TodoDoneItemContainer from "../containers/TodoDoneItemContainer";

class TodoDone extends Component {

    render() {
        const todoItems = this.props.taskList.map((task) => (
            <TodoDoneItemContainer key={task.id} task={task} />));
        return (
            <div>
                <h1>Done List</h1>
                {todoItems}
            </div>
        );
    }
}

export default TodoDone;