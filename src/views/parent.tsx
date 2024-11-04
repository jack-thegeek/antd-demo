import React, {useState} from 'react'
import { Button } from 'antd';

type ChildProps = {
    msg: string;
};

const Child: React.FC<ChildProps> = (props: any) => {
    const {msg} = props
    return (<div>from child: {msg}</div>)
};

const Parent: React.FC = () => {
    const [msg,setMsg] = useState('Hello world')
    const changeMsg = () => {
        setMsg('Hello Java')
    }

    return (
        <div>
            <div>from parent: {msg}</div>
            <Child msg={msg}/>
            <Button onClick={changeMsg}>change msg</Button>
        </div>
    )
};

export default Parent;