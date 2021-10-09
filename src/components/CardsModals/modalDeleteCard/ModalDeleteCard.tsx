import React from "react";
import s from './ModalDeleteCard.module.css';
import {useDispatch} from "react-redux";
import { deleteCardsPackTC } from "../../../store/cardsPacksReducer";
import ModalBox from "../../../common/modalBox/ModalBox";
import ButtonReturnCancel from "../../../common/buttonReturnCancel/ButtonReturnCancel";
import { deleteCard } from "../../../store/cardsReducer";

type ModalDeletePackType={
    open: boolean
    setClose: (open: boolean)=> void
    cardId: string
}

const ModalDeleteCard = (props: ModalDeletePackType) => {

    const dispatch = useDispatch()

    const onDeleteButtonClickHandler = () =>{
        dispatch(deleteCard(props.cardId ))
        props.setClose(false)
    }

    return(
        <ModalBox open={props.open} setClose={props.setClose} title={'Delete Card'}>
            <>
                <p className={s.modalText}> Do you really want to remove <span className={s.modalTextBold}>this card</span>?</p>

                <div className={s.buttonsBox}>
                    <ButtonReturnCancel onClick={()=>props.setClose(false)}  />
                    <button className={s.buttonDelete} type='button' onClick={onDeleteButtonClickHandler}>Delete</button>
                </div>
            </>
        </ModalBox>

    )
}

export default ModalDeleteCard