import React from "react";
import s from './ButtonFormCancel.module.css'
import { useHistory } from 'react-router';

const ButtonFormCancel = () => {

    const history = useHistory();

    return (
        <div className={s.buttonContainerCancel}>
        <button className={s.buttonCancel} type="submit" onClick={() => history.goBack()}>
            Cancel
        </button>
    </div>
    )
}

export default ButtonFormCancel