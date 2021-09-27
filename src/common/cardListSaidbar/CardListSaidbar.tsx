import React from "react";
import s from './CardListSaidbar.module.css';

type CardListSaidbarPropsType = {
    children: JSX.Element;  
}

const CardListSaidbar = (props: CardListSaidbarPropsType) => {

    return (
        <div className={s.container}>
             {props.children}
        </div>
    )
}

export default CardListSaidbar;


