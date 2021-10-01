import React from "react";
import { useDispatch } from "react-redux";
import s from './InputSearch.module.css';

type InputSearchPropstype = {
    placeholder: string
}

const InputSearch = (props: InputSearchPropstype) => {

    const dispatch = useDispatch();

    
    return (
<input
className={s.input}
 type="text"
 placeholder={props.placeholder}/>
    )
}

export default InputSearch