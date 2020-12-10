import React, { Component } from 'react';
import "./TodoItem.css"
import { v4 as uuidv4 } from "uuid";
import TodoLabelContainer from "../containers/TodoLabelContainer"

class TodoDoneItem extends Component {
    render() {
        const todoLabels = this.props.task.labels.map((label) => (
            <TodoLabelContainer key={label.id} label={label} task={this.props.task} />));
        return (
            <div>
                <section>
                    <div>
                        <div className="box" >
                            <label style={{ float: "left" }} >{this.props.task.text}</label>
                            <div className="button-to-right">
                                {todoLabels}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TodoDoneItem;