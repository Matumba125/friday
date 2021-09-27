import React from "react";
import s from './CardListContainer.module.css';

type CardListContainerPropsType = {
    children: JSX.Element
}

const CardListContainer = (props: CardListContainerPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.boxCardList}>
                <div className={s.saidbarCardList}>
                    {props.children}
                </div>
                <main className={s.mainCardList}>
                    {props.children}
                </main>
            </div>
        </div>

    )
}

export default CardListContainer