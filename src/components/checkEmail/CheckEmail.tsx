import React from "react";
import s from './CheckEmail.module.css';
import CardContainer from '../cardContainer/CardContainer';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import checkEmailImg from '../../assets/images/checkEmailImg.png';

const CheckEmail = () => {

    return (
        <CardContainer>
            <>
                <div className={s.globalTitleBox}>
                    <GlobalTitle />
                </div>

                <div className={s.cardImgBlock}>
                    <img className={s.imgCard} src={checkEmailImg} alt="" />
                </div>

                <div className={s.listTitleBox}>
                    <ListTitle
                        text='Check Email'
                    />
                </div>

                <p className={s.cardText}>We’ve sent an Email with instructions to example@mail.com</p>
            </>
        </CardContainer>
    )
}

export default CheckEmail;