import {Redirect} from 'react-router-dom';
import s from './Cards.module.css';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import React, {MouseEvent, useEffect, useState} from 'react'
import LinkPackName from '../../common/linkPackName/LinkPackName'
import InputSearch from '../../common/inputSearch/InputSearch';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor'
import {useDispatch, useSelector} from 'react-redux';
import {getCardsPage,
    getCardsPageCount, getCardsSelector, getCurrentPackId, getCurrentUserId, getIsLoggedIn, getPackUserId} from '../../store/selectots';
import {PATH} from '../routing/Routing';
import CardsList from '../CardsList/CardsList';
import ModalAddNewCard from '../CardsModals/modalAddNewCard/ModalAddNewCard';
import { getCards } from '../../store/cardsReducer';

const Cards = () => {

    const [addCard, setAddCard] = useState<boolean>(false)

    const dispatch = useDispatch()

    const cards = useSelector(getCardsSelector)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentUserId = useSelector(getCurrentUserId)
    const packUserId = useSelector(getPackUserId)
    const currentPage = useSelector(getCardsPage)
    const currentPackId = useSelector(getCurrentPackId)
    const pageCount = useSelector(getCardsPageCount)

    useEffect(() => {
       dispatch(getCards(currentPackId))
    }, [currentPage, pageCount, currentPackId, dispatch])

    const onAddButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setAddCard(true)
    }

    const isPackBelogsToUser = packUserId === currentUserId

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            <ModalAddNewCard setOpen={setAddCard} open={addCard}/>
            <CardListContainer>
                <>
                    <div className={s.packListWrap}>

                        <LinkPackName/>

                        <div className={s.searchBox}>
                            <div className={isPackBelogsToUser ? s.inputWrap : s.inputWrapBig}>
                                <InputSearch
                                    placeholder={'Search...'}/>
                            </div>
                            {isPackBelogsToUser &&
                            <div className={s.buttonWrap}>
                                <ButtonFormColor
                                    text={'Add new card'}
                                    onClick={onAddButtonClickHandler}
                                />
                            </div>
                            }

                        </div>
                        {cards.length === 0 ?
                            <span
                                className={s.cardListText}>This pack is empty. Click add new card to fill this pack</span>
                            : <CardsList isPackBelongsToUser={isPackBelogsToUser} cards={cards}/>
                        }
                    </div>
                </>

            </CardListContainer>
        </>
    )
}

export default Cards