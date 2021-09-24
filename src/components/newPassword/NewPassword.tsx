import React from 'react';
import s from './NewPassword.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';


const NewPassword = () => {
    return (
        <div>
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

                    <form className={s.formWrap} action="" method="">

                        <InputForm
                            text={''}
                            type={'password'}
                            placeholder={'Password'}
                            title={'the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *'}
                            pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'}

                        />

                        <p className={s.cardText}>
                            Create new password and we will send you further instructions to email
                        </p>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Create new password' />
                        </div>
                    </form>


                </>
            </CardContainer>


        </div>
    );
};

export default NewPassword;