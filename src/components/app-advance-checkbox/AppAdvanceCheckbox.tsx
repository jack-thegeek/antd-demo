import React from 'react'
import { Checkbox } from 'antd'

interface IProps {
    title: string
    trueValue: string | number
    falseValue: string | number
    value?: any
    onChange?: any
}

//
const AdvanceCheckbox = (props: IProps) => {
    const {title, trueValue, falseValue, onChange, value} = props
    const handleChange = (e: any) => {
        const newValue = e.target.checked ? trueValue : falseValue
        onChange?.(newValue)
    }
    return (
        <Checkbox checked={value === trueValue} onChange={handleChange}>{title}</Checkbox>
    )
}

export default AdvanceCheckbox