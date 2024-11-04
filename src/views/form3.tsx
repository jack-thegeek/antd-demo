import React, { useEffect, useState } from 'react'
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
    const [record, setRecord] = useState<any>({});

    mock.onGet("/leaders").reply(200,
        [{name: '领导1', id: 1}, {name: '领导2', id: 2}, {name: '领导3', id: 3}]
    );

    mock.onGet("/user").reply(200,
        {
            username: 'jack',
            leader: 1,
            _leader: {name: '领导1', id: 1},
        }
    );

    const fetchTest = (value: number): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value); // 解析Promise并返回value
            }, 3000);
        });
    }

    const handle = async () => {

        if (1) {
            const res = await fetchTest(123)
            console.log(123)
        }

        console.log(456)
    };

    useEffect(() => {
        const init = async () => {
            const userData: any = await api.get('/user')
            setRecord((pre: any) => ({...pre, ...userData}))
            form.setFieldsValue({...userData, _leader: userData._leader.name})
        }
        init()
        handle()
    }, [])

    const fetchData = async (value: any): Promise<OptionType[]> => {
        console.log('test', value)
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
            leader: values._leader?.value || record.leader
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
                    onFocus={handleSearch}
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