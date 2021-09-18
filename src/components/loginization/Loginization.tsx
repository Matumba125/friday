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
                        <input type="email" placeholder="Please enter email" />
                    </label>

                    <label>
                        <p className="inputText"> Password</p>
                        <input type="password" placeholder="Please enter password" />
                    </label>

                    <Link to={'/password-recovery'}>Forgot password</Link>
                </form>
            </div>
        </div>
    );
};

export default Loginization;