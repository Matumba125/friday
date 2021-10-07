import React, { useState } from "react";
import s from './LearnQuestion.module.css';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import ListTitle from '../../common/listTitle/ListTitle';
import InputRadio from "../../common/inputRadio/InputRadio";
import logo from "../../assets/images/logo.png";

const LearnQuestion = () => {
    const [isRotate, setIsRotate] = useState(false);

    const rotate = () => {
        setIsRotate(state => !state)
    }

    return (

        <div className={s.container}>

            <div className={isRotate ? `${s.card} ${s.rotate}` : s.card}>


                {/* front */}
                <div className={s.cardFront}>
                    <div className={s.titleBox}>
                        <ListTitle
                            text={'Learn “Pack Name”'} />
                    </div>

                    <h4 className={`${s.textTitle} ${s.frontTextTutleQuestion}`}>Question:</h4>

                    <div className={s.textBox}>
                        <p className={`${s.textCard} ${s.textCardQuestion}`}>“How "This" works in JavaScript?”
                        </p>
                    </div>

                    <div className={s.buttonsBox}>
                        <div className={s.buttonCancelWrap}>
                            <ButtonReturnCancel />
                        </div>

                        <div className={s.buttonWrap}>
                            <ButtonFormColor
                                text={'Show answer'}
                                onClick={rotate} />
                        </div>
                    </div>

                    <img className={s.imgCard} src={logo} alt="logo" />
                </div>

                {/* back */}
                <div className={s.cardBack}>
                    <div className={s.titleBox}>
                        <ListTitle
                            text={'Learn “Pack Name”'} />
                    </div>
                    {/* <h4 className={`${s.title} ${s.backTextTitleQuestion}`}>Question:
                       <div className={s.textBox}>
                        <p className={s.textCard}>“How "This" works in JavaScript?"</p>
                    </div>*/}

                    <h4 className={`${s.textTitle} ${s.backTextTitleAnswer}`}>Answer:</h4>

                    <div className={`${s.textBox} ${s.textBoxBack}`}>
                        <p className={`${s.textCard} ${s.textCardAnswer}`}>“This is how "This" works in JavaScript”
                        </p>
                    </div>

                    <div className={s.inputBox}>
                        <p className={`${s.textTitle} ${s.inputTitle}`}>Rate yourself:</p>

                        <form className={s.formRadio}>
                            <InputRadio
                                name={'answer'}
                                value={'Did not know'}
                                text={'Did not know'}
                            //    checked={}
                            //    onChange={''}
                            />

                            <InputRadio
                                name={'answer'}
                                value={'Forgot'}
                                text={'Forgot'}
                            //    checked={}
                            //    onChange={''}
                            />

                            <InputRadio
                                name={'answer'}
                                value={'Сonfused'}
                                text={'Сonfused'}
                            //    checked={}
                            //    onChange={''}
                            />

                            <InputRadio
                                name={'answer'}
                                value={'Knew the answer'}
                                text={'Knew the answer'}
                            //    checked={}
                            //    onChange={''}
                            />

                            <InputRadio
                                name={'answer'}
                                value={'Did not know'}
                                text={'Did not know'}
                            //    checked={}
                            //    onChange={''}
                            />
                        </form>
                    </div>

                    <div className={`${s.buttonsBox} ${s.buttonsBoxBack}`}>
                        <div className={s.buttonCancelWrap}>
                            <ButtonReturnCancel
                                onClick={rotate} />
                        </div>
                        <div className={s.buttonWrap}>
                            <ButtonFormColor
                                text={'Next'} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LearnQuestion