import React from "react";
import s from './AddNewCard.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import InputFile from '../../common/inputFile/InputFile';

const AddNewCard = () => {

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
                    <ButtonReturnCancel />

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