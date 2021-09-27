import React from "react";
import s from './ButtonsShowPacks.module.css';

const ButtonsShowPacks = () => {

    return (
        <>
            <h3 className={s.title}>
                Show packs cards
            </h3>
            <div className={s.buttonsBlock}>
                <button className={s.button}>
                    My
                </button >

                <button className={s.button}>
                    All
                </button>

            </div>
        </>
    )
}

export default ButtonsShowPacks
