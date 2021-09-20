import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Loginization.module.css';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import InputForm from '../inputForm/InputForm';

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

                <GlobalTitle />
                <ListTitle />

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
                        pattern={'(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*'}
                        title={'Password must contain at least 8 characters, one number, one uppercase letter and one lowercase'}
                        viewPass={viewPass}
                        onViewPass={onViewPass}
                    />

                    {/* <label className={s.formItem}>
                        <p className={s.inputText}> Email</p>
                        <div className={s.inputBox}>
                            <input className={s.input}
                                type="email"
                                placeholder="Please enter email"
                                pattern=""
                                title="Please enter email"
                                required />
                        </div>

                    </label> */}

                    {/* <label className={s.formItem}>
                        <p className={s.inputText}> Password</p>
                        <div className={s.inputBox}>
                            <input className={s.input}
                                type={viewPass ? "text" : "password"}
                                placeholder="Please enter password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                title="Password must contain at least 8 characters, one number, one uppercase letter and one lowercase"
                                required />

                            <button className={viewPassStyle} onClick={onViewPass} />
                        </div>
                    </label> */}

                    <div className={s.linkWrap}>
                        <Link className={s.passForgot} to={'/password-recovery'}>Forgot password</Link>
                    </div>

                    <div className={s.buttonWrap}>
                        <button className={s.submitButton} type="submit">Login</button>
                    </div>

                    <p className={s.formText}>Don’t have an account?</p>

                    <Link className={s.linkRegistration} to={'/registration'}>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Loginization;