import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, Spin } from 'antd';

const {Option} = Select

interface OptionType {
    name: string
    id: number
}

const MyForm: React.FC = () => {
    const record = {
        username: 'jack',
        password: 1234,
        role: 20,
        leader: 1,
        _leader: {name: '领导1', id: 1},
    }

    const [form] = Form.useForm();

    const options = [
        {name: '用户', id: 10},
        {name: '员工', id: 20},
        {name: '管理员', id: 30},
    ];

    const fetchData = (value: any): Promise<OptionType[]> => {
        console.log('test', value)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {name: '领导1', id: 1},
                    {name: '领导2', id: 2}
                ]);
            }, 1000);
        });
    };

    const [leaders, setLeaders] = useState<OptionType[]>([]);
    const [fetching, setFetching] = useState(false);

    const handleSearch = (value: any) => {
        if (value) {
            setFetching(true);
            fetchData(value).then((newOptions: any) => {
                setLeaders(newOptions);
                setFetching(false);
            });
        } else {
            setLeaders([]);
        }
    };


    useEffect(() => {
        console.log('test', record)
        form.setFieldsValue({...record})
    }, [])

    const onFinish = (values: any) => {
        const data = {
            ...values
        }
        console.log('Success:', data);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item name="role" label="Role" rules={[{required: true, message: 'Please select a role!'}]}>
                <Select
                    placeholder="Select a role"
                    // labelInValue
                    // optionLabelProp="label"
                >
                    {options.map((option) => (
                        <Option key={option.id} value={option.id} label={option.name}>
                            {option.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="_leader" label="leader" rules={[{required: true, message: 'Please select a leader!'}]}>
                <Select
                    showSearch
                    notFoundContent={fetching ? <Spin size="small"/> : null}
                    onSearch={handleSearch}
                    placeholder="Select a person"
                >
                    {leaders.map((opt) => (
                        <Option key={opt.id} value={opt.id}>
                            {opt.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;