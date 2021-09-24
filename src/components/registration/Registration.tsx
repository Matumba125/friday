import React, { useState } from 'react';
import s from './Registration.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import ButtonFormCancel from '../../common/buttonFormCancel/ButtonFormCancel'
import { useHistory } from 'react-router';

const Registration = () => {

    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const onEmailChangeHandler = (email: string) =>{
        setEmail(email)
    }
    const onPasswordChangeHandler = (email: string) =>{
        setPassword(email)
    }
    const onPasswordConfirmChangeHandler = (email: string) =>{
        setConfirmPassword(email)
    }

    const onClickHandler = () =>{

    }

    return (

        <CardContainer>
            <>
                <div className={s.globalTitleBox}>
                    <GlobalTitle />
                </div>

                <div className={s.listTitleBox}>
                    <ListTitle
                    text='Sign Up'
                    />
                </div>

                <form className={s.formWrap} action="" method="">

                    <InputForm
                        text={'Email'}
                        inputType={'email'}
                        placeholder={'Please enter email'}
                        title={'Please enter email'}
                        value={email}
                        onChangeText={onEmailChangeHandler}
                    />

                    <InputForm
                        text={'Password'}
                        inputType={'password'}
                        placeholder={'Please enter password'}
                        pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}
                        title={'the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *'}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <InputForm
                        text={'Сonfirm password'}
                        inputType={'password'}
                        placeholder={'Please confirm password'}
                        pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}
                        title={'Please confirm password'}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
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