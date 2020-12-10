import React, { Component } from 'react';
import LabelListContainer from '../containers/LabelListContainer';
import { getLabelList } from '../apis/labels';
import "./TodoItem.css"
import LabelAdderContainer from '../containers/LabelAdderContainer';
import { Divider } from "antd";

class LabelManager extends Component {
    componentDidMount() {
        getLabelList().then(response => {
            this.props.initLabelList(response.data);
        });
    }

    render() {
        const labels = this.props.labelList.map((label) => (
            <LabelListContainer className="todo-container" key={label.id} label={label} />));
        return (
            <div>
                <Divider orientation="center">Label Manager</Divider>
                {labels}
                <br></br>
                <br></br>
                <LabelAdderContainer />
            </div>
        );
    }
}

export default LabelManager;