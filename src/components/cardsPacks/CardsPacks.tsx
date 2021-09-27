import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import CardListSaidbar from '../../common/cardListSaidbar/CardListSaidbar';
import CardListMain from '../../common/cardListMain/CardListMain';
import ButtonsShowPacks from '../../common/buttonsShowPacks/ButtonsShowPacks';
import InputRange from '../../common/inputRange/InputRange';
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
                <>
                    <CardListSaidbar>
                        <>
                            <ButtonsShowPacks />
                            <InputRange />
                            <div>
                                <ButtonFormColor text={'Get Packs'} onClick={onGetPacksClickHandler} />
                            </div>
                        </>
                    </CardListSaidbar>
                    <CardListMain>
                        <>
                        </>
                    </CardListMain>
                </>

            </CardListContainer>
        </>
    );
};

export default CardsPacks;