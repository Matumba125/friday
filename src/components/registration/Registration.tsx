import React, { useState } from 'react';
import s from './Registration.module.css';
import CardContainer from '../cardContainer/CardContainer';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import InputForm from '../inputForm/InputForm';
import ButtonFormColor from '../buttonFormColor/ButtonFormColor';
import ButtonFormCancel from '../buttonFormCancel/ButtonFormCancel'
import { useHistory } from 'react-router';

const Registration = () => {

    const history = useHistory();

    return (

        <CardContainer>
            <>
                <div className={s.globalTitleBox}>
                    <GlobalTitle />
                </div>

                <div className={s.listTitleBox}>
                    <ListTitle />
                </div>

                <form className={s.formWrap} action="" method="">

                    <InputForm
                        text={'Email'}
                        type={'email'}
                        placeholder={'Please enter email'}
                        title={'Please enter email'}
                    />

                    <InputForm
                        text={'Password'}
                        type={'password'}
                        placeholder={'Please enter password'}
                        pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}
                        title={'the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *'}
                    />

                    <InputForm
                        text={'Сonfirm password'}
                        type={'password'}
                        placeholder={'Please confirm password'}
                        pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}
                        title={'Please confirm password'}
                    />

                    <div className={s.buttonsContainer}>

                        <ButtonFormCancel/>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Register' />
                        </div>
                    </div>

                </form>
            </>
        </CardContainer>
    );
};

export default Registration;