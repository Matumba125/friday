import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import { getCardsPacksTC } from '../../store/cardsPacksReducer';

const CardsPacks = () => {

    const dispatch = useDispatch()

    const onGetPacksClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(getCardsPacksTC())
    }

    return (
        <>
            <CardListContainer>
                <div>
                    <ButtonFormColor text={'Get Packs'} onClick={onGetPacksClickHandler} />
                </div>
            </CardListContainer>
        </>

    );
};

export default CardsPacks;