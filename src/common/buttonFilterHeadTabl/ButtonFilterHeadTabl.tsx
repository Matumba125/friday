import React, { useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setSortPacksAC } from "../../store/cardsPacksReducer";
import s from './ButtonFilterHeadTabl.module.css';

const ButtonFilterHeadTabl = () => {

    const dispatch = useDispatch()

    const [direction, setDirection] = useState<0 | 1>(0)

    const onChangeDirection = (e: MouseEvent<HTMLButtonElement>) => {
        if (direction === 0) {
            dispatch(setSortPacksAC({ sortPacks: 1 }))
            setDirection(1)
        } else {
            dispatch(setSortPacksAC({ sortPacks: 0 }))
            setDirection(0)
        }
    }

    return (
        <button className={s.buttonHead} onClick={onChangeDirection}>
            Last Updated
            <div id={'arrowBtn'} className={s.buttonArrow}>
            </div>
        </button>
    )
}

export default ButtonFilterHeadTabl