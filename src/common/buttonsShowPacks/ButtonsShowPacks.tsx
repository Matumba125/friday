import React from "react";
import s from './ButtonsShowPacks.module.css';

const ButtonsShowPacks = () => {

    return (
        <>
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
