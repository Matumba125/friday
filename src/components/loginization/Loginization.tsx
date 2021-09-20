import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Loginization.module.css';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import InputForm from '../inputForm/InputForm';
import ButtonFormColor from '../buttonFormColor/ButtonFormColor';

const Loginization = () => {

    // !password control
    const [viewPass, setViewPass] = useState(false);
    const onViewPass = () => {
        setViewPass(state => !state)
    }
    // !password control

    return (
        <div className={s.container}>
            <div className={s.boxForm}>

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
                        title={'the password must be at least 6 characters long including one number one capital letter, one small letter and one of the special characters ! @ # $% ^ & *'}
                        viewPass={viewPass}
                        onViewPass={onViewPass}
                    />


                    <div className={s.linkWrap}>
                        <Link className={s.passForgot} to={'/password-recovery'}>Forgot password</Link>
                    </div>

                    <div className={s.buttonContainer}>
                        <ButtonFormColor
                            text='Login' />
                    </div>


                    <p className={s.formText}>Don’t have an account?</p>

                    <Link className={s.linkRegistration} to={'/registration'}>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Loginization;