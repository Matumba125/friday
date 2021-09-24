import React from "react";
import { Link } from "react-router-dom";
import s from './CardContainer.module.css'

type CardContainerPropsType = {
    children: JSX.Element
}

const CardContainer = (props: CardContainerPropsType) => {
    
return (
    <div className={s.container}>
        <div className={s.boxForm}>
            {props.children}
        </div>
    </div>
)
}

export default CardContainer