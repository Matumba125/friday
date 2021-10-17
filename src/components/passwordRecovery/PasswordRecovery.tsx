import {Link} from 'react-router-dom';
import s from './PasswordRecovery.module.css';
import {PATH} from '../routing/Routing';
import {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsSended, getPasswordRecoveryError} from '../../store/selectots';
import {sendRecoveryMailTC} from '../../store/passwordReducer';
import CardContainer from '../../la-1-common/cardContainer/CardContainer';
import GlobalTitle from '../../la-1-common/globalTitle/GlobalTitle';
import ListTitle from '../../la-1-common/listTititle/ListTitile';
import InputForm from '../../la-1-common/inputForm/InputForm';
import ButtonFormColor from '../../la-1-common/buttonFormColor/ButtonFormColor';
import CheckEmail from '../../la-1-common/checkEmail/CheckEmail';

const PasswordRecovery = () => {

    const dispatch = useDispatch()

    const isSended = useSelector(getIsSended)
    const error = useSelector(getPasswordRecoveryError)


    const [email, setEmail] = useState<string>('')
    
    const onEmailChangeHandler = (gainedEmail: string) =>{
        setEmail(gainedEmail)
    }

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        dispatch(sendRecoveryMailTC(email))
    }

    return (
        <>
            
            {!isSended ?
                <CardContainer>
                    <>
                        <div className={s.globalTitleBox}>
                            <GlobalTitle/>
                        </div>

                        <div className={s.listTitleBox}>
                            <ListTitle
                                text='Forgot your password?'
                            />
                        </div>

                        <form className={s.formWrap} onSubmit={onSubmitHandler} action="" method="">

                            <InputForm
                                text={''}
                                inputType={'email'}
                                placeholder={'Email'}
                                title={'Please enter your email'}
                                value={email}
                                onChangeText={onEmailChangeHandler}
                            />

                            {
                                error && <p className={s.error}>{error}</p>
                            }

                            <p className={`${s.cardText} ${s.cardTextTop}`}>
                                Enter your email address and we will send you further instructions
                            </p>

                            <div className={s.buttonContainer}>
                                <ButtonFormColor
                                    text='Send Instructions'
                                />
                            </div>

                            <p className={`${s.cardText} ${s.cardTextBottom}`}>
                                Did you remember your password?
                            </p>

                        </form>

                        <Link className={s.linkCardBottom} to={PATH.LOGIN}>Try logging in</Link>

                    </>
                </CardContainer>
                : <CheckEmail email={email} />
            }
        </>
    );
};

export default PasswordRecovery;
