import React, {ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonReturnCancel.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


const ButtonReturnCancel: React.FC<DefaultButtonPropsType> = props => {

    return (
        <button
            className={s.buttonCancel}
            type="submit"
            {...props}
        >  Cancel
        </button>

    )
}

export default ButtonReturnCancel