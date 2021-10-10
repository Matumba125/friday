import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonFormColor.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonFormColorPropsType = DefaultButtonPropsType & {
    text: string
}


const ButtonFormColor: React.FC<ButtonFormColorPropsType> = props => {

    const btnClassName = props.text === 'Cancel' ? s.buttonCancel : s.buttonSubmitColor

    return (
       
            <button 
                className={btnClassName}
                type="submit"
                disabled={props.disabled}
                {...props}
            >{props.text}</button>
    )
}

export default ButtonFormColor