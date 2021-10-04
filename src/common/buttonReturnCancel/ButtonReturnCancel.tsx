import React from "react";
import s from './ButtonReturnCancel.module.css';

const ButtonReturnCancel = () => {

    return (
        <button
            className={s.buttonCancel}
            type="submit"
        >  Cancel
        </button>

    )
}

export default ButtonReturnCancel