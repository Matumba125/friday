import React, {ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonTabDelete.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;

const ButtonTabDelete: React.FC<DefaultButtonPropsType> = props => {

    return (
        <button className={s.tableButton} type="button" {...props}>Delete</button>
    )
}

export default ButtonTabDelete;