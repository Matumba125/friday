import React from "react";
import s from './InputSearch.module.css';

type InputSearchPropstype = {
    placeholder: string
}

const InputSearch = (props: InputSearchPropstype) => {

    return (
<input
className={s.input}
 type="text"
 placeholder={props.placeholder}/>
    )
}

export default InputSearch