import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import {Redirect} from 'react-router-dom';
import {PATH} from '../routing/Routing';
import {getIsLoggedIn, getIsPrivate, getPacksPage, getPageCount, getSortPacks} from '../../store/selectots';
import {getCardsPacksTC} from '../../store/cardsPacksReducer';
import PacksListMain from '../../common/packsListMain/CardListMain';

const CardsPacks = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector(getPacksPage)
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

                    <PacksListMain />
                </>
            </CardListContainer>
        </>
    );
};

export default CardsPacks;
