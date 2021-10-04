import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './ButtonReturnCancel.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonReturnCancelPropsType = DefaultButtonPropsType & {
    text?: string
}

const ButtonReturnCancel:  React.FC<ButtonReturnCancelPropsType> = props => {

    return (
        <button
            className={s.buttonCancel}
            type="submit"
            onClick={props.onClick}
        >  Cancel
        </button>

    )
}

export default ButtonReturnCancel