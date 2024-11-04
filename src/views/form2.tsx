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
    const leader = useRef();


    mock.onGet("/leaders").reply(200,
        [{name: '领导11', id: 11}, {name: '领导2', id: 2}, {name: '领导3', id: 3}]
    );

    mock.onGet("/user").reply(200,
        {
            username: 'jack',
            leader: 1,
            _leader: {name: '领导1', id: 1},
        }
    );

    useEffect(() => {
        const init = async () => {
            const userData: any = await api.get('/user')
            form.setFieldsValue({
                username: userData.username,
                _leader: {
                    value: userData._leader.id,
                    label: userData._leader.name,
                },
            });
        }
        init()
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

    const log = ()=>{
        console.log('leader: ', leader.current)
    }

    const handleSelect = (value: any) => {
        leader.current = value
        log()
    }

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
                    // optionLabelProp={"key"}
                    notFoundContent={fetching ? <Spin size="small"/> : null}
                    onSearch={handleSearch}
                    onFocus={handleSearch}
                    onSelect={handleSelect}
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