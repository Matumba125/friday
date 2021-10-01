import React, { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import CardListMain from '../../common/cardListMain/CardListMain';
import s from './CardPacks.module.css';
import { Redirect } from 'react-router-dom';
import { PATH } from '../routing/Routing';
import {getCardPacks, getCardsPage, getIsLoggedIn } from '../../store/selectots';
import { getCardsPacksTC } from '../../store/cardsPacksReducer';

const CardsPacks = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector(getCardsPage)

    useEffect(()=>{
        dispatch(getCardsPacksTC())
    },[currentPage])

    const isLoggedIn = useSelector(getIsLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }
    return (
        <>
            <CardListContainer>
                <>
                    <CardListSaidbar />

                    <CardListMain />
                </>
            </CardListContainer>
        </>
    );
};

export default CardsPacks;
