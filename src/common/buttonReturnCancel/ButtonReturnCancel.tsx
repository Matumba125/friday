import React from "react";
import s from './ButtonReturnCancel.module.css';

const ButtonReturnCancel = () => {

    return (
        <div className={s.buttonContainerCancel}>
            <button
                className={s.buttonCancel}
                type="submit"
            >
                Cancel
            </button>
        </div>
    )
}

export default ButtonReturnCancel