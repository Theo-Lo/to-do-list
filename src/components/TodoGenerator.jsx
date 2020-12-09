import FormItem from 'antd/lib/form/FormItem';
import React, { Component, createRef } from 'react';
import { Form, Input, Button, Progress } from "antd";
import { addNewTodo } from '../apis/todos';
import "./TodoGenerator.css"

class TodoGenerator extends Component {
    constructor(props) {
        super(props);

        this.formRef = createRef();
    }
    addTask = (values) => {
        addNewTodo(values.task).then(response => {
            this.props.addTask(response.data);
        });

        this.formRef.current.resetFields();
    };

    render() {
        const totalTask = this.props.taskList.length;
        const doneTask = this.props.taskList.filter(task => task.done == true).length;
        const percentage = Math.round((doneTask / totalTask) * 100);
        return (
            <div >
                <Form ref={this.formRef} layout="inline" onFinish={(values) => this.addTask(values)}>
                    <FormItem name="task" className="inputBox" >
                        <Input type="text" placeholder="input a new todo here..." />
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit" >add</Button>
                    </FormItem>
                </Form>
                <Progress percent={percentage} />
            </div>
        );
    }
}

export default TodoGenerator;