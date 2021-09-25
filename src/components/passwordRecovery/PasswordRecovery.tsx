import { Link } from 'react-router-dom';
import s from './PasswordRecovery.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import { PATH } from '../routing/Routing';
import { useState } from 'react';
import CheckEmail from '../../common/checkEmail/CheckEmail';

const PasswordRecovery = () => {
    const [isPasswordSent, setIsPasswordSent] = useState(false);
    const [email, setEmail] = useState<string>('')
    
    const onEmailChangeHandler = (gainedEmail: string) =>{
        setEmail(gainedEmail)
    }

    

    const sendPassword = () => {
        setIsPasswordSent(true);
    }

    return (
        !isPasswordSent ?
            <CardContainer>
                <>
                    <div className={s.globalTitleBox}>
                        <GlobalTitle />
                    </div>

                    <div className={s.listTitleBox}>
                        <ListTitle
                            text='Forgot your password?'
                        />
                    </div>

                    <form className={s.formWrap} action="" method="">

                        <InputForm
                            text={''}
                            inputType={'email'}
                            placeholder={'Email'}
                            title={'Please enter your email'}
                            value={email}
                            onChangeText={onEmailChangeHandler}
                        />

                        <p className={`${s.cardText} ${s.cardTextTop}`}>
                            Enter your email address and we will send you further instructions
                        </p>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Send Instructions' onClick={sendPassword} />
                        </div>

                        <p className={`${s.cardText} ${s.cardTextBottom}`}>
                            Did you remember your password?
                        </p>

                    </form>

                    <Link className={s.linkCardBottom} to={PATH.LOGIN}>Try logging in</Link>

                </>
            </CardContainer>
            : <CheckEmail />
    );
};

export default PasswordRecovery;
