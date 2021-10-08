import React, {KeyboardEvent, useState} from "react";
import s from './ModalEditPack.module.css';
import ModalBox from '../../common/modalBox/ModalBox';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import {updateCardsPackTC} from "../../store/cardsPacksReducer";
import {useDispatch} from "react-redux";
import InputForm from "../../common/inputForm/InputForm";
import ButtonFormColor from "../../common/buttonFormColor/ButtonFormColor";

type ModalDeletePackType={
    open: boolean
    setClose: (open: boolean)=> void
    packName: string
    packId: string
}

const ModalEditPack = (props: ModalDeletePackType) => {

    const[newPackName, setNewPackName] = useState<string>(props.packName)

    const dispatch = useDispatch()

    const onTextChangeHandler = (text: string)=>{
        setNewPackName(text)
    }

    const onSaveButtonClickHandler = () =>{
        dispatch(updateCardsPackTC({name: newPackName, packId: props.packId}))
        props.setClose(false)
    }

    const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.code === 'Enter'){
            dispatch(updateCardsPackTC({name: newPackName, packId: props.packId}))
            props.setClose(false)
        }
    }


    return(
        <ModalBox open={props.open} setClose={props.setClose} title={'Edit Pack'}>
            <>
                <div className={s.inputBox}>
                    <InputForm
                        text={'Pack Name'}
                        inputType={'text'}
                        title={'Please enter new pack name'}
                        placeholder={'Pack Name'}
                        value={newPackName}
                        onChangeText={onTextChangeHandler}
                        onKeyPress={onInputKeyPress}
                    />
                </div>

                <div className={s.buttonsBox}>
                    <ButtonReturnCancel onClick={()=>props.setClose(false)}  />
                    <div className={s.buttonContainer}>
                        <ButtonFormColor
                            onClick={onSaveButtonClickHandler}
                            text={'Save'}
                        />
                    </div>

                </div>
            </>
        </ModalBox>

    )
}

export default ModalEditPack