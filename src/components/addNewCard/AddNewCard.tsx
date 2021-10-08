import React, {MouseEvent} from "react";
import s from './AddNewCard.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import InputFile from '../../common/inputFile/InputFile';
import {useDispatch, useSelector} from "react-redux";
import {getIsCardAdding} from "../../store/selectots";
import {setIsCardAdding} from "../../store/appReducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../routing/Routing";

const AddNewCard = () => {

    const isCardAdding = useSelector(getIsCardAdding)

    const dispatch = useDispatch()

    const onCancelClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        dispatch(setIsCardAdding({isCardAdding: false}))
    }

    if(!isCardAdding){
        return <Redirect to={PATH.CARDS}/>
    }

    return (
        <CardContainer>
            <>
                <div className={s.titleBox}>
                    <ListTitle
                        text={'Card Info'} />
                </div>

                <InputForm
                    text={'Question'}
                    inputType={'text'}
                    placeholder={'Please enter a question'}
                    title={' '}
                />

                <div className={s.inputFileBox}>
                    <InputFile />
                </div>

                <InputForm
                    text={'Answer'}
                    inputType={'text'}
                    placeholder={'Please enter  your answer'}
                    title={' '}
                />

                <div className={s.inputFileBox}>
                    <InputFile />
                </div>

                <div className={s.buttonsBox}>
                    <ButtonReturnCancel onClick={onCancelClickHandler} />

                    <div className={s.buttonBox}>
                        <ButtonFormColor
                            text={'Save'} />
                    </div>

                </div>

            </>
        </CardContainer>

    )
}

export default AddNewCard