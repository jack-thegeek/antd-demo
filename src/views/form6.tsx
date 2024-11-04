import React, { useEffect, useState } from 'react';
import { Button, Form } from 'antd';

interface FoodItem {
    id: number;
    name: string;
}

interface FormData {
    food: number[];
    _food: FoodItem[];
}

const Food: React.FC = () => {
    const initialData: FormData = {
        food: [0, 1],
        _food: [
            {id: 0, name: 'rice'},
            {id: 1, name: 'fish'}
        ]
    };

    return <MyForm initialData={initialData}/>;
};

interface MyFormProps {
    initialData: FormData;
}

const MyForm: React.FC<MyFormProps> = ({initialData}) => {
    const [form] = Form.useForm();
    const [foodState, setFoodState] = useState<FormData>(initialData);

    useEffect(() => {
        form.setFieldsValue({food: foodState.food});
    }, [foodState.food, form]);

    const add = () => {
        const newFood: FoodItem = {id: foodState._food.length, name: 'beef'};
        setFoodState((prevState) => ({
            _food: [...prevState._food, newFood],
            food: [...prevState.food, newFood.id],
        }));
    };

    const remove = (index: number) => {
        setFoodState((prevState) => {
            const updatedFood = prevState._food.filter((_, i) => i !== index);
            const updatedFoodIds = updatedFood.map((item) => item.id);
            return {_food: updatedFood, food: updatedFoodIds};
        });
    };

    const onFinish = (values: { food: number[] }) => {
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
            {foodState._food.map((food, idx) => (
                <div style={{marginBottom: 15}} key={food.id}>
                    <span>{food.id} --- {food.name}</span>
                    <Button onClick={() => remove(idx)} type="primary">
                        remove{idx}
                    </Button>
                </div>
            ))}

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button onClick={add} type="primary">
                    add
                </Button>
            </Form.Item>

            <Form.Item name="food" hidden initialValue={foodState.food}>
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