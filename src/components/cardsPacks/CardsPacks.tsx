import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import CardListMain from '../../common/cardListMain/CardListMain';
import {Redirect} from 'react-router-dom';
import {PATH} from '../routing/Routing';
import {getCardsPage, getIsLoggedIn, getIsPrivate, getPageCount, getSortPacks} from '../../store/selectots';
import {getCardsPacksTC} from '../../store/cardsPacksReducer';

const CardsPacks = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector(getCardsPage)
    const pageCount = useSelector(getPageCount)
    const isPrivate = useSelector(getIsPrivate)
    const sortPacks = useSelector(getSortPacks)

    useEffect(()=>{
        dispatch(getCardsPacksTC())
    },[currentPage, pageCount, isPrivate, sortPacks])

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
