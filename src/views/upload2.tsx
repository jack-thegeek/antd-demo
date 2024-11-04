import React, { useEffect, useState } from 'react'
import { Button, Form, Space } from 'antd';

const Upload = (props: any) => {
    const {category, onChange, list = []} = props
    const [files, setFiles] = useState(list)

    useEffect(() => {
        setFiles(list)
    }, [list])

    function filter(list: []) {
        if (category) {
            return list.filter((item: any) => {
                return item.category === category
            })
        } else {
            return list
        }
    }

    function upload() {
        // 更新上一级的数据源，而不是直接 setFiles
        const data = {name: 'pear', category: 'food'}
        onChange([...list, data])
    }

    return (
        <div>
            {files.length > 0 && filter(files).map((file: any, index: number) => (
                <p key={index}>{index}-{file.name}</p>
            ))}
            <Button onClick={upload}>Upload</Button>
        </div>
    );
};

const AppUpload = () => {
    const [form] = Form.useForm();

    const [uploads, setUploads] = useState([
        {name: 'apple', category: 'food'},
        {name: 'juice', category: 'drink'},
        {name: 'water', category: 'drink'}
    ])
    const updateUploads = (items: any) => {
        setUploads(items)
    }
    const onFinish = (values: any) => {
        console.log('values:', values);
        console.log('uploads:', uploads);
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
            <Form.Item name="uploads" valuePropName="list">
                <Space direction="vertical" size="large" style={{display: 'flex'}}>
                    <Upload onChange={updateUploads} list={uploads} category={'food'}/>
                    <Upload onChange={updateUploads} list={uploads} category={'drink'}/>
                    <Upload onChange={updateUploads} list={uploads} category={''}/>
                </Space>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}

export default AppUpload;