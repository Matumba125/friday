import React from "react";
import s from './ListContainer.module.css';

type CardListContainerPropsType = {
    children: JSX.Element;  
}

const ListContainer = (props: CardListContainerPropsType) => {

    return (
        
            <div className={s.container}>
                <div className={s.boxCardList}>
                  {props.children}
                </div>
            </div>

    )
}

export default ListContainer