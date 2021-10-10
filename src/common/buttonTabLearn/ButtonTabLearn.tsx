import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonTabLearn.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;


const ButtonLearn: React.FC<DefaultButtonPropsType> = props=> {

    return (
        <button className={s.tableButton} {...props}>Learn</button>
    )
}

export default ButtonLearn;