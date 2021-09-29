import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import CardListMain from '../../common/cardListMain/CardListMain';
import s from './CardPacks.module.css';

const CardsPacks = () => {

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
