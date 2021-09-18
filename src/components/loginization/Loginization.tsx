import React from 'react';
import './Loginization.module.css';
import { Link } from 'react-router-dom';

const Loginization = () => {
    return (
        <div className="container">
            <div className="containerInner">
                <h1 className="globalTitle">It-incubator</h1>
                <h2 className="listTitle">Sign In</h2>
                <form action="" method="">
                    <label>
                        <p className="inputText"> Email</p>
                        <input type="email" placeholder="Please enter email" required/>
                        <span className="errorText">This field is requared</span>
                    </label>

                    <label>
                        <p className="inputText"> Password</p>
                        <input type="password" placeholder="Please enter password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*" title="password must contain at least 8 characters, one number, one uppercase letter and one lowercase" required/>
                    </label>

                    <Link className="passForgot" to={'/password-recovery'}>Forgot password</Link>

                    <button className="submitButton" type="submit">Login</button>

                    <p className="formText">Don’t have an account?</p>

                    <Link className="linkRegistration" to={'/registration'}>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Loginization;