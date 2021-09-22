import React, { useState } from 'react';
import s from './InputForm.module.css';

type InputFormPropsType = {
    text: string
    type: string
    placeholder: string
    title: string
    pattern?: string
}

const InputForm = (props: InputFormPropsType) => {
    
    // !password control
    const [viewPass, setViewPass] = useState(false);
    const onViewPass = () => {
        setViewPass(state => !state)
    }
    // !password control

    const type = props.type === 'email'
     ? 'email'
     : viewPass ? 'text' : 'password';
    const viewPassStyle = viewPass ? s.passwordControl : `${s.passwordControl} ${s.view}`;

    const onClick = () => {
        setViewPass(state => !state)
    }

    return (
        <label className={s.formItem}>
            <p className={s.inputText}>{props.text}</p>
            <div className={s.inputBox}>
                <input
                    className={s.input}
                    type={type}
                    placeholder={props.placeholder}
                    title={props.title}
                    pattern={props.pattern}
                    required
                />

               {props.type === 'password' && <button className={viewPassStyle} onClick={onClick} />}
            </div>
        </label>

    )
}

export default InputForm