import React from "react";
import s from './InputRange.module.css';

const InputRange = () => {

    return (
        <>
            <div className={s.inputBlock}>

                <h3 className={s.title}>
                    Number of cards
                </h3>

                <input className={s.input} type="range" />
            </div>
        </>
    )
}



export default InputRange