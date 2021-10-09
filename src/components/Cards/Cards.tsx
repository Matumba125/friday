import {Redirect} from 'react-router-dom';
import s from './Cards.module.css';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import React, {MouseEvent, useState} from 'react'
import LinkPackName from '../../common/linkPackName/LinkPackName'
import InputSearch from '../../common/inputSearch/InputSearch';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor'
import {useDispatch, useSelector} from 'react-redux';
import {getCardsSelector, getIsLoggedIn} from '../../store/selectots';
import {PATH} from '../routing/Routing';
import {setIsCardAdding} from '../../store/appReducer'
import CardsList from '../CardsList/CardsList';
import ModalAddNewCard from '../CardsModals/modalAddNewCard/ModalAddNewCard';

const Cards = () => {

    const[addCard, setAddCard] = useState<boolean>(false)


    const cards = useSelector(getCardsSelector)
    const isLoggedIn = useSelector(getIsLoggedIn)

    const dispatch = useDispatch()

    const onAddButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setAddCard(true)
    }


    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }

    return (
        <>
            <ModalAddNewCard setOpen={setAddCard} open={addCard}/>
            <CardListContainer>
                <>
                    <div className={s.packListWrap}>

                      <LinkPackName/>
                      
                        <div className={s.searchBox}>
                            <div className={s.inputWrap}>
                                <InputSearch
                                    placeholder={'Search...'} />
                            </div>
                            <div className={s.buttonWrap}>
                                <ButtonFormColor
                                    text={'Add new card'}
                                    onClick={onAddButtonClickHandler}
                                />
                            </div>

                        </div>
                        { cards.length === 0 ?
                            <span
                                className={s.cardListText}>This pack is empty. Click add new card to fill this pack</span>
                            :<CardsList cards={cards}/>
                        }
                    </div>
                </>

            </CardListContainer>
        </>
    )
}

export default Cards