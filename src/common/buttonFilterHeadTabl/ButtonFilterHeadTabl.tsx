import React, { useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setSortPacksAC } from "../../store/cardsPacksReducer";
import s from './ButtonFilterHeadTabl.module.css';

type ButtonFilterHeadProps ={
    direction: 0 | 1
    setDirection: () => void
}

const ButtonFilterHeadTabl: React.FC<ButtonFilterHeadProps> = props => {



    return (
        <button className={s.buttonHead} onClick={props.setDirection}>
            Last Updated
            <div id={'arrowBtn'} className={s.buttonArrow}>
            </div>
        </button>
    )
}

export default ButtonFilterHeadTabl