import React from 'react'
import { Button, Form, Select } from 'antd';

const MySelect: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const options: any = [
        {deliverable: '1', label: 'Option 1', value: 'opt 1'},
        {deliverable: '2', label: 'Option 2', value: 'opt 2'},
        {deliverable: '3', label: 'Option 3', value: 'opt 3'},
    ];

    return (
        <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{opt2: {deliverable: '3', label: 'Option 3', value: 'opt 3'}}}
        >
            <Form.Item
                name="opt"
                label="opt"
                getValueFromEvent={(value, options) => {
                    return value.map((val: any) => {
                        const selectedOption = options.find((option: any) => option.value === val);
                        return selectedOption ? {...selectedOption} : null;
                    }).filter(Boolean); // Filter out any null values
                }}>
                <Select mode="multiple" options={options}/>
            </Form.Item>

            <Form.Item
                name="opt2"
                label="opt2"
                getValueFromEvent={(value, _option) => {
                    return {
                        ..._option
                    };
                }}>
                <Select options={options}/>
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