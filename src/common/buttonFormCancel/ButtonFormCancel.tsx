import React, {ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './ButtonFormCancel.module.css';
import { useHistory } from 'react-router';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonFormCancel: React.FC<DefaultButtonPropsType> = props => {

    const history = useHistory();

    return (
        <div className={s.buttonContainerCancel}>
        <button 
            className={s.buttonCancel} 
            type="submit" 
            disabled={props.disabled}
            onClick={() => history.goBack()}
        >
            Cancel
        </button>
    </div>
    )
}

export default ButtonFormCancel