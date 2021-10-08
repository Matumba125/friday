import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonFormColor.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonFormColorPropsType = DefaultButtonPropsType & {
    text: string
}


const ButtonFormColor: React.FC<ButtonFormColorPropsType> = props => {

    return (
       
            <button 
                className={s.buttonSubmitColor} 
                type="submit" onClick={props.onClick}
                disabled={props.disabled}
                {...props}
            >{props.text}</button>
    )
}

export default ButtonFormColor