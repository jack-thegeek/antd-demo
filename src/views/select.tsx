import React from 'react'
import {Button, Form, Select} from 'antd';
import AdvanceSelect from '../components/app-advance-select/AppAdvanceSelect'

const MySelect: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const options: any = [
        {deliverable: '1', label: 'Option 1'},
        {deliverable: '2', label: 'Option 2'},
        {deliverable: '3', label: 'Option 3'},
    ];

    function onChange(values: any[]) {
        console.log('外层的 onChange：', values)
    }


    return (
        <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item name="opt" label="opt">
                <AdvanceSelect
                    onChange={onChange}
                    options={options}
                    trackBy="deliverable"
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