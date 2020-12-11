import React, { Component, createRef } from 'react';
import { Input, Menu, Dropdown, Button, Form } from 'antd';
import { addLabel } from '../apis/labels';
import FormItem from 'antd/lib/form/FormItem';
import { DownOutlined } from '@ant-design/icons';

class LabelAdder extends Component {
    constructor(props) {
        super(props);

        this.state = { color: "red" };
        this.formRef = createRef();
    }


    addLabel = (values) => {
        for (var label in this.props.labelList) {
            console.log(label);
            if (this.props.labelList[label].label == values.label) {
                this.setState({ color: "red" });
                this.formRef.current.resetFields();
                return;
            }
        };
        const newLabel = {
            label: values.label,
            color: this.state.color,
        }
        addLabel(newLabel).then(response => {
            this.props.addLabel(response.data);
        });
        this.setState({ color: "red" });
        this.formRef.current.resetFields();
    }

    setColor = ({ key }) => {
        this.setState({ color: key });
    }

    render() {
        const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "purple", "gold", "orange"];
        const menu = (
            <Menu onClick={this.setColor}>
                {colors.map((color) => (
                    <Menu.Item key={color}>
                        {color}
                    </Menu.Item>
                ))}
            </Menu>
        );
        return (
            <div >
                <Form ref={this.formRef} layout="inline" onFinish={(values) => this.addLabel(values)}>
                    <FormItem name="label" >
                        <Input type="text" placeholder="Add your new tag here" />
                    </FormItem>
                    <FormItem name="color">
                        <Dropdown overlay={menu}>
                            <Button className="button-to-right">
                                {this.state.color} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit" >add</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default LabelAdder;