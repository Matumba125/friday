import React, {FormEvent, useState} from 'react';
import s from './NewPassword.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPasswordRecoveryError, getPasswordSetted} from '../../store/selectots';
import {PATH} from '../routing/Routing';
import {setNewPasswordTC} from '../../store/passwordReducer';

type ParamsType = {
    token: string
}

const NewPassword = () => {
    
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()

    const passwordSetted = useSelector(getPasswordSetted)
    const error = useSelector(getPasswordRecoveryError)

    const params = useParams<ParamsType>()

    const onPasswordChangeHandler = (gainedPass: string) =>{
        setPassword(gainedPass)
    }

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        dispatch(setNewPasswordTC(password, params.token))
    }

    if(passwordSetted){
        return <Redirect to={PATH.LOGIN}/>
    }
    
    return (
        <>

            <CardContainer>
                <>
                    <div className={s.globalTitleBox}>
                        <GlobalTitle />
                    </div>

                    <div className={s.listTitleBox}>
                        <ListTitle
                            text='Create new password'
                        />
                    </div>

                    <form className={s.formWrap} onSubmit={onSubmitHandler}>

                        <InputForm
                            text={''}
                            inputType={'password'}
                            placeholder={'Password'}
                            title={'the password must be at least 6 characters long including, one number, one capital letter, one small letter'}
                            pattern={'(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}
                            value={password}
                            onChangeText={onPasswordChangeHandler}

                        />

                        {
                            error && <p className={s.error}>{error}</p>
                        }

                        <p className={s.cardText}>
                            Create new password
                        </p>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Create new password' />
                        </div>
                    </form>


                </>
            </CardContainer>


        </>
    );
};

export default NewPassword;