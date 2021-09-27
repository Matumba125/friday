import React from "react";
import s from './CardListMain.module.css';

type CardListMainPropsType = {
    children: JSX.Element;  
}

const CardListMain = (props: CardListMainPropsType) => {

    return (
        <main className={s.container}>
             {props.children}
        </main>
    )
}

export default CardListMain;


