import React, { useEffect, useState } from 'react'
import { Button, Form } from 'antd';

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
        const data = {name: 'pear', category: 'food'}
        setFiles((pre: any) => {
            const newList = [...pre, data]
            onChange(newList)
            return newList
        })

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

    const uploads = [
        {name: 'apple', category: 'food'},
        {name: 'juice', category: 'drink'},
        {name: 'water', category: 'drink'}
    ]

    const onFinish = (values: any) => {
        console.log('values:', values);
        // console.log('uploads:', uploads);
    }

    useEffect(() => {
        form.setFieldsValue({uploads: uploads})
    }, [])

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
                <Upload category={'food'}/>
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