import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import s from './ButtonTabEdit.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;


const ButtonTabEdit: React.FC<DefaultButtonPropsType> = props=> {

    return (
        <button className={s.tableButton} {...props}>Edit</button>
    )
}

export default ButtonTabEdit;