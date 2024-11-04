import React, { useEffect, useState, useRef } from 'react'
import { Button, Form, Input, Select, Spin } from 'antd';
import api from '../api/api'
import MockAdapter from 'axios-mock-adapter'

const {Option} = Select
const mock = new MockAdapter(api);

interface OptionType {
    name: string
    id: number
}

const MyForm: React.FC = () => {
    const [form] = Form.useForm();
    const [leaders, setLeaders] = useState<OptionType[]>([]);
    const [fetching, setFetching] = useState(false);

    mock.onGet("/leaders").reply(200,
        [{name: '领导11', id: 11}, {name: '领导2', id: 2}, {name: '领导3', id: 3}]
    );

    useEffect(() => {
        const init = async () => {
        }
        init()
    }, [])

    const fetchData = async (value: any): Promise<OptionType[]> => {
        return await api.get('/leaders')
    };

    const handleSearch = (value: any) => {
        setFetching(true);
        fetchData(value).then((newOptions: any) => {
            setLeaders(newOptions);
            setFetching(false);
        });
    };

    const onFinish = (values: any) => {
        const data = {
            ...values,
            leader: values._leader.value
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

            <Form.Item name="_leader" label="leader" rules={[{required: true, message: 'Please select a leader!'}]}>
                <Select
                    showSearch
                    filterOption={false}
                    labelInValue
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

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;