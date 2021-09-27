import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";
import s from './ButtonFormCancel.module.css';
import { useHistory } from 'react-router';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonFormCancel: React.FC<DefaultButtonPropsType> = props => {

    const history = useHistory();

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        console.log(history)
        history.goBack()
    }

    return (
        <div className={s.buttonContainerCancel}>
        <button 
            className={s.buttonCancel} 
            type="submit" 
            disabled={props.disabled}
            onClick={onClickHandler}
        >
            Cancel
        </button>
    </div>
    )
}

export default ButtonFormCancel;