import React, { Component } from 'react';

class TodoDoneItem extends Component {
    render() {
        return (
            <div>
                <span >{this.props.task.text}</span>
            </div>
        );
    }
}

export default TodoDoneItem;