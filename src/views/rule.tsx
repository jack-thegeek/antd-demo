import React from 'react'
import { Button, Form, Input } from 'antd';

const MyForm: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function change() {
        form.setFieldsValue({amount: 100});
        form.validateFields(['amount']);
    }

    function isValid(_: object, value: number, callback: any) {
        if (value > 50) {
            callback('不能大于50')
        } else {
            callback()
        }
    }

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Amount"
                name="amount"
                rules={[{ validator: isValid }, { required: true, message: '' }]}
            >
                <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button onClick={change} type="primary">
                    Change to 100
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;