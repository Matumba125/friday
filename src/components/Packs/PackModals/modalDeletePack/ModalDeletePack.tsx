import React from "react";
import s from './ModalDeletePack.module.css';
import {useDispatch} from "react-redux";
import {deleteCardsPackTC} from "../../../../store/cardsPacksReducer";
import ModalBox from "../../../../common/modalBox/ModalBox";
import ButtonFormColor from "../../../../common/buttonFormColor/ButtonFormColor";

type ModalDeletePackType={
    open: boolean
    setClose: (open: boolean)=> void
    packName: string
    packId: string
}

const ModalDeletePack = (props: ModalDeletePackType) => {

    const dispatch = useDispatch()

    const onDeleteButtonClickHandler = () =>{
        dispatch(deleteCardsPackTC(props.packId ))
        props.setClose(false)
    }

    return(
    <ModalBox open={props.open} setClose={props.setClose} title={'Delete Pack'}>
        <>
            <p className={s.modalText}> Do you really want to remove <span className={s.modalTextBold}>{props.packName} </span>
                All cards will be excluded from this course.
            </p>

            <div className={s.buttonsBox}>
                <ButtonFormColor text={'Cancel'} onClick={()=>props.setClose(false)}  />
                <button className={s.buttonDelete} type='button' onClick={onDeleteButtonClickHandler}>Delete</button>
            </div>
            </>
    </ModalBox>

    )
}

export default ModalDeletePack