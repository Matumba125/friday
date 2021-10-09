import React, {MouseEvent, useState} from "react";
import s from './ModalEditCard.module.css';
import InputForm from '../../../common/inputForm/InputForm';
import ButtonReturnCancel from '../../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../../common/buttonFormColor/ButtonFormColor';
import InputFile from '../../../common/inputFile/InputFile';
import {useDispatch} from "react-redux";
import ModalBox from "../../../common/modalBox/ModalBox";
import {editCard} from "../../../store/cardsReducer";

type AddNewCardType ={
    open: boolean
    setOpen: (open: boolean)=> void
    answer: string
    question: string
    cardId: string
}


const ModalAddNewCard: React.FC<AddNewCardType> = props => {

    const dispatch = useDispatch()

    const[question, setQuestion] = useState<string>(props.question)
    const[answer, setAnswer] = useState<string>(props.answer)

    const onQuestionChangeHandler = (text: string) =>{
        setQuestion(text)
    }
    const onAnswerChangeHandler = (text: string) =>{
        setAnswer(text)
    }

    const onCancelClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.setOpen(false)
        // setAnswer(props.answer)
        // setQuestion(props.question)
    }

    const onSaveClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        try{
            dispatch(editCard({question, answer, cardId: props.cardId}))
        }finally {
            props.setOpen(false)
        }
    }

    return (
        <ModalBox open={props.open} setClose={props.setOpen} title={'Card Info'}>
                <>
                    <InputForm
                        text={'Question'}
                        inputType={'text'}
                        placeholder={'Please enter a question'}
                        title={' '}
                        value={question}
                        onChangeText={onQuestionChangeHandler}
                    />

                    <div className={s.inputFileBox}>
                        <InputFile/>
                    </div>

                    <InputForm
                        text={'Answer'}
                        inputType={'text'}
                        placeholder={'Please enter  your answer'}
                        title={' '}
                        value={answer}
                        onChangeText={onAnswerChangeHandler}
                    />

                    <div className={s.inputFileBox}>
                        <InputFile/>
                    </div>

                    <div className={s.buttonsBox}>
                        <ButtonReturnCancel onClick={onCancelClickHandler}/>

                        <div className={s.buttonBox}>
                            <ButtonFormColor
                                text={'Save'}
                                onClick={onSaveClickHandler}
                            />
                        </div>

                    </div>

                </>
        </ModalBox>

    )
}

export default ModalAddNewCard