import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Loginization.module.css';

const Loginization = () => {

    // !password control
    const [viewPass, setViewPass] = useState(false);
    const onViewPass = () => {
        setViewPass(state => !state)
    }
    const viewPassStyle = viewPass ? s.passwordControl : `${s.passwordControl} ${s.view}`;
    // !password control

    return (
        <div className={s.container}>
            <div className={s.boxForm}>
                <h1 className={s.globalTitle}>It-incubator</h1>
                <h2 className={s.listTitle}>Sign In</h2>
                <form className={s.formWrap} action="" method="">
                    <label className={s.formItem}>
                        <p className={s.inputText}> Email</p>
                        <input className={s.input}
                            type="email"
                            placeholder="Please enter email"
                            required />
                    </label>

                    <label className={s.formItem}>
                        <p className={s.inputText}> Password</p>
                        <div className={s.passwordWrap}>
                            <input
                                className={s.input}
                                type={viewPass ? "text" : "password"}
                                placeholder="Please enter password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                title="Password must contain at least 8 characters, one number, one uppercase letter and one lowercase"
                                required
                            />

                            <button className={viewPassStyle} onClick={onViewPass} />
                        </div>
                    </label>

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