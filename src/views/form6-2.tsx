import React, { useEffect } from 'react'
import { Button, Form } from 'antd';

const Food: React.FC = () => {
    const data = {
        food: [0, 1],
        _food: [{id: 0, name: 'rice'}, {id: 1, name: 'fish'}]
    }

    return (<MyForm data={data}/>)
}

const MyForm = ({data}: any) => {

    const [form] = Form.useForm();


    const [state, setState] = React.useState<any>({
        _food: [],
    })

    useEffect(() => {
        setState((pre: any) => ({...pre, _food: data._food}))
        form.setFieldsValue({'food': data.food})
    }, [data])

    const add = function () {
        const newFood = {id: 3, name: 'beef'}
        setState((pre: any) => ({...pre, _food: [...pre._food, newFood]}))
        const pre = form.getFieldValue('food');
        form.setFieldValue('food', [...pre, newFood.id])
    }

    const remove = function (index: number) {
        setState((pre: any) => {
            const newFood = pre._food.filter((_: any, i: number) => i !== index)
            return {...pre, _food: newFood};
        })
        const preFood = form.getFieldValue('food');
        const result = preFood.filter((_: any, i: number) => i !== index)
        form.setFieldValue('food', result)
    }

    const onFinish = (values: any) => {
        // 提交时只提交id
        console.log('post:', values);
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
            {state._food.map((food: any, idx: number) => (
                <div style={{marginBottom: 15}} key={idx}>
                    <span>{food.id} --- {food.name}</span>
                    <Button onClick={() => {
                        remove(idx)
                    }} type="primary">remove{idx}</Button>
                </div>
            ))}

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button onClick={add} type="primary">
                    add
                </Button>
            </Form.Item>

            <Form.Item name={'food'} hidden>
                <input type="text"/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Food;