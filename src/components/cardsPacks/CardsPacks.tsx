import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import CardListMain from '../../common/cardListMain/CardListMain';
import s from './CardPacks.module.css';
import { Redirect } from 'react-router-dom';
import { PATH } from '../routing/Routing';
import { getIsLoggedIn } from '../../store/selectots';

const CardsPacks = () => {

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