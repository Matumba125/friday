import React from 'react';
import s from './CardsList.module.css';
import ListCardTableLeine from '../../common/listCardTableLeine/ListCardTableLeine'
import {PaginationRounded} from '../../common/pagination/Pagination';
import Select from '../../common/select/Select';
import {CardType, setCardsPageCount, setCurrentCardsPage} from '../../store/cardsReducer';
import CardListHead from '../../common/CardListHead/CardListHead';
import {useDispatch, useSelector} from 'react-redux';
import {getCardsPage, getTotalCardsPages} from '../../store/selectots';

type CardsListType = {
    cards: CardType[]
    isPackBelongsToUser: boolean
}

const CardsList: React.FC<CardsListType> = props => {

    const dispatch = useDispatch()

    const currentPage = useSelector(getCardsPage)
    const totalPages = useSelector(getTotalCardsPages)

    const onPaginationChangeHandler = (page: number) => {
        dispatch(setCurrentCardsPage({currentPage: page}))
    }

    const onSelectChangeHandler = (pageCount: number) => {
        dispatch(setCardsPageCount({pageCount}))
    }

    return (
        <>
            <div className={s.tabWrap}>
                <table className={s.table}>

                    <CardListHead isPackBelongsToUser={props.isPackBelongsToUser}/>

                    <tbody className={s.tableBody}>
                    {
                        
                        props.cards.map((m, index) => <ListCardTableLeine
                            isPackBelongsToUser={props.isPackBelongsToUser} key={index} card={m}/>)
                    }

                    </tbody>
                </table>

            </div>

            <div className={s.tableNavigation}>

                <PaginationRounded setNewPage={onPaginationChangeHandler} currentPage={currentPage}
                                   totalPages={totalPages}/>

                <div className={s.select}>
                                <span className={s.selectText}>
                                    Show
                                </span>

                    <Select changeHandler={onSelectChangeHandler}/>

                    <span className={s.selectText}>
                                    Cards per Page
                                </span>
                </div>

            </div>

        </>

    )
}

export default CardsList