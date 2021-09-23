import React from "react";
import s from './ButtonFormColor.module.css'

type ButtonFormColorPropsType = {
    text: string
    callback?: () => void;
}


const ButtonFormColor = (props: ButtonFormColorPropsType) => {

    return (
       
            <button className={s.buttonSubmitColor} type="submit" onClick={props?.callback}>{props.text}</button>
    )
}

export default ButtonFormColor 