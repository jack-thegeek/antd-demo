import React from 'react'
import { Button, Form, Input } from 'antd';

interface IProps {
    form: any;
}

const Phone: React.FC = ({ onChange } :any) => {

    const phone = {
        id: 1,
        num: 8282782
    }

    React.useEffect(() => {
        if (onChange) {
            onChange(phone.id);
        }
    }, [onChange]);

    return (
        <div>{phone.num}</div>
    );
};

const Address = ({form}: IProps) => {

    function onChange() {
        form.setFieldValue('emails',['jack@qqq.com'])
        console.log('test', form.getFieldsValue())
    }


    return (
        <>
            <Form.Item name="country" label="Country">
                <Input onChange={onChange}/>
            </Form.Item>
            <Form.Item name="state" label="State">
                <Input onChange={onChange}/>
            </Form.Item>
            <Form.Item name="city" label="City">
                <Input onChange={onChange}/>
            </Form.Item>
            <Form.Item name="phone" label="phone">
                <Phone/>
            </Form.Item>
            <Form.Item hidden name="emails" label="email">
                <Input />
            </Form.Item>
        </>
    );
};

const MyForm: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const data = {
            ...values
        }
        console.log('Success:', data);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
            >
                <Input/>
            </Form.Item>

            <Address form={form}/>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;