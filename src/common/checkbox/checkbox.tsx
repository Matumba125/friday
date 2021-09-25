import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import { isPropertySignature } from "typescript";
import s from './checkbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type CheckboxPropsType = DefaultInputPropsType & {
    text: string
    // inputType: string
    onChangeText?: (value: string) => void
    // onChange: () => void;
}

const Checkbox: React.FC<CheckboxPropsType> = props => {

    const {
        name,
        onChangeText,
        value,
        text
    } = props

    return (
        <label className={s.formCheckbox}>
            <input
            checked={props.checked}
                className={s.checkbox}
                type="checkbox"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <span className={s.checkStyle}></span>
            <p className={s.inputText}>{props.text}</p>
        </label>

    )
}

export default Checkbox;