import React from 'react'
import { Button, Form, Select } from 'antd';
import AdvanceSelect from '../components/app-advance-select/AppAdvanceSelect'

const {Option} = Select

interface OptionType {
    name: string
    id: number
}

const MySelect: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', ...values);
    };

    const [selected, setSelected] = React.useState<any[]>([]); // 初始化为空数组

    const options: any = [
        {deliverable: '1', label: 'Option 1'},
        {deliverable: '2', label: 'Option 2'},
        {deliverable: '3', label: 'Option 3'},
    ];


    return (
        <Form
            form={form}
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item name="role" label="Role">
                <AdvanceSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
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