import React from "react";
import s from './SaidbarTitle.module.css';

type SaidbarTitlePropstype = {
    text: string;
}

const SaidbarTitle = (props: SaidbarTitlePropstype) => {

    return (
        <h3 className={s.title}>
            {props.text}
        </h3>
    )

}

export default SaidbarTitle; 