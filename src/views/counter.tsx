import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../redux/store';
import {decrement, increment} from '../redux/actions/actions';

const Counter = () => {
    const count = useSelector((state: IState) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;