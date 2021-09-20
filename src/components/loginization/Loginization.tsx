
import { Link } from 'react-router-dom';
import s from './Loginization.module.css';
import CardContainer from '../cardContainer/CardContainer';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import InputForm from '../inputForm/InputForm';
import ButtonFormColor from '../buttonFormColor/ButtonFormColor';

const Loginization = () => {

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
            </>
        </CardContainer>
    );
};

export default Loginization;