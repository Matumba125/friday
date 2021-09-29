import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import s from './CardListSaidbar.module.css';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import ButtonsShowPacks from '../../common/buttonsShowPacks/ButtonsShowPacks';
import InputRange from '../../common/inputRange/InputRange';
import SaidbarTitle from '../saidbarTitle/SaidbarTitle';
import { getCardsPacksTC } from '../../store/cardsPacksReducer';
import { setProfileIsEditingAC } from '../../store/profileReducer';

const CardListSaidbar = () => {

    const dispatch = useDispatch()

    const onGetPacksClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(getCardsPacksTC())
    }

    return (
        <>
            <div className={s.container}>
                <>
                    <div className={s.saidbarItem}>
                        <SaidbarTitle
                            text={"Show packs cards"} />
                        <ButtonsShowPacks />

                    </div>

                    <div className={s.saidbarItem}>
                        <SaidbarTitle
                            text={"Number of cards"} />
                        <InputRange />
                    </div>

                    <div className={s.buttonContainer}>
                        <ButtonFormColor
                            text={'Get Packs'}
                            onClick={onGetPacksClickHandler} />
                    </div>

                </>
            </div>
        </>
    )
}


export default CardListSaidbar;


