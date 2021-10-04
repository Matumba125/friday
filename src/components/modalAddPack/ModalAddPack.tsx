import React, {useState} from "react";
import s from './ModalAddPack.module.css';
import ModalBox from '../../common/modalBox/ModalBox';
import InputForm from '../../common/inputForm/InputForm';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import {useDispatch} from "react-redux";
import {createCardsPackTC} from "../../store/cardsPacksReducer";

type ModalAddPackType={
    open: boolean
    setClose: (open: boolean)=> void
    title: string
}


const ModalAddPack = (props: ModalAddPackType) => {

    const[newPackName, setNewPackName] = useState<string>('')

    const dispatch = useDispatch()

    const onTextChangeHandler = (text: string)=>{
        setNewPackName(text)
    }

    const onSaveButtonClickHandler = () =>{
        dispatch(createCardsPackTC({name: newPackName}))
        props.setClose(false)
    }

    return (
        <ModalBox open={props.open} setClose={props.setClose} title={props.title}>
            <>
                <div className={s.inputBox}>
                    <InputForm
                        text={'Pack Name'}
                        inputType={'text'}
                        title={'Please enter package name'}
                        placeholder={'Pack Name'}
                        onChangeText={onTextChangeHandler}
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

export default ModalAddPack