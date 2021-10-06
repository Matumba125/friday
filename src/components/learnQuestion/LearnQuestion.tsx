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

                    <p className={`${s.text} ${s.frontTextQuestion}`}>Question: <span className={`${s.question} ${s.span}`}>“How "This" works in JavaScript”
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eveniet veritatis perferendis ipsa quia ipsam excepturi alias eos eaque earum asperiores sapiente enim ducimus laudantium labore accusantium ipsum, architecto, saepe laborum nihil quam ut? Non consequatur tempora debitis commodi nobis.</span> </p>

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
                    {/* <p className={`${s.text} ${s.backTextQuestion}`}>Question: <span className={`${s.question} ${s.span}`}>“How "This" works in JavaScript?”</span> </p> */}

                    <p className={`${s.text} ${s.backTextAnswer}`}>Answer: <span className={`${s.answer} ${s.span}`}>“This is how "This" works in JavaScript”
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione facere nobis, quo suscipit dolores consequatur quaerat veniam molestias vero! Voluptatum voluptates debitis mollitia deleniti eveniet perspiciatis voluptate quia, magnam animi eius corporis. Perferendis veniam fugiat fuga eos dolores veritatis?</span> </p>

                    <div className={s.inputBox}>
                        <p className={`${s.text} ${s.inputTitle}`}>Rate yourself:</p>

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