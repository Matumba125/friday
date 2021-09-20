import React from "react";
import s from './InputForm.module.css';

type InputFormPropsType = {
    text: string
    type: string
    placeholder: string
    title: string
    pattern?: string
    viewPass?: boolean
    onViewPass?: () => void
}

const InputForm = (props: InputFormPropsType) => {
    const type = props.type === 'email'
     ? 'email'
     : props.viewPass ? 'password' : 'text';
    const viewPassStyle = props.viewPass ? s.passwordControl : `${s.passwordControl} ${s.view}`;

    const onClick = () => {
        if (props.onViewPass) {
            props.onViewPass()
        }
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