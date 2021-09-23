import React from "react";
import s from './ButtonFormColor.module.css'

type ButtonFormColorPropsType = {
    text: string
}


const ButtonFormColor = (props: ButtonFormColorPropsType) => {

    return (
       
            <button className={s.buttonSubmitColor} type="submit">{props.text}</button>
    )
}

export default ButtonFormColor 