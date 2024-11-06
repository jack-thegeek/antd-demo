import React from 'react'
import {Button, Form} from 'antd';
import AdvanceCheckbox from '../components/app-advance-checkbox/AppAdvanceCheckbox'

const MySelect: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    function onChange(values: any[]) {
        console.log('外层的 onChange：', values)
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{opt: 100}}
        >
            <Form.Item name="opt" label="opt">
                <AdvanceCheckbox
                    title={'checkbox'}
                    onChange={onChange}
                    trueValue={100}
                    falseValue={0}
                />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MySelect;