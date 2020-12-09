import FormItem from 'antd/lib/form/FormItem';
import React, { Component, createRef } from 'react';
import { Form, Input, Button } from "antd";
import { v4 as uuidv4 } from 'uuid';

class TodoGenerator extends Component {
    constructor(props){
        super(props);

        this.formRef = createRef();
    }
    addTask = (values) => {
        const task = {
            id: uuidv4(),
            text: values.task,
            done: false
        };
        this.props.addTask(task);
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <div>
                <Form ref={this.formRef} layout="inline" onFinish={(values) => this.addTask(values)}>
                    <FormItem name="task">
                        <Input type="text" placeholder="input a new todo here..." />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">add</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default TodoGenerator;