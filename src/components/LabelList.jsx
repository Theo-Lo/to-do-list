import React, { Component } from 'react';
import { Button, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteLabel } from '../apis/labels';

class LabelList extends Component {
    deleteLabel = () => {
        const currentLable = this.props.label;

        deleteLabel(currentLable.id).then(() => {
            this.props.removeLabel(currentLable.id);
        })
    }
    render() {
        const currentLable = this.props.label;
        return (
            <div style={{ width: "100%" }} >
                <div className="box" >
                    <Button className="button-to-right" type="text" onClick={this.deleteLabel} icon={<DeleteOutlined />}></Button>
                    <div>
                        <Tag color={currentLable.color}>
                            {currentLable.label}
                        </Tag>
                    </div>
                </div>
            </div>
        );
    }
}

export default LabelList;