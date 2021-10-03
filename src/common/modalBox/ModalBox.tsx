import React from "react";
import s from './ModalBox.module.css';

type ModalBoxPropsType = {
    children?: JSX.Element;  
}

const ModalBox = (props: ModalBoxPropsType) => {

    return (
        <>
            <div className={s.wrap}>
                <div className={s.modalContent}>
                {props.children}
                </div>
            </div>
        </>
    )
}

export default ModalBox