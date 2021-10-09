import React from 'react';
import s from './CardsList.module.css';
import ListCardTableLeine from '../../common/listCardTableLeine/ListCardTableLeine'
import {PaginationRounded} from '../../common/pagination/Pagination';
import Select from '../../common/select/Select';
import { CardType } from '../../store/cardsReducer';
import CardListHead from '../../common/listCardTableHead/CardListHead';

type CardsListType = {
    cards: CardType[]
    isPackBelongsToUser: boolean
}

const CardsList: React.FC<CardsListType> = props => {

    return (
        <>
            <div className={s.tabWrap}>
                <table className={s.table}>

                    <CardListHead isPackBelongsToUser={props.isPackBelongsToUser}/>

                    <tbody className={s.tableBody}>
                    {
                       props.cards.map( (m, index) => <ListCardTableLeine isPackBelongsToUser={props.isPackBelongsToUser} key={index} card={m}/>)
                    }

                    </tbody>
                </table>

            </div>

            <div className={s.tableNavigation}>

                <PaginationRounded/>

                <div className={s.select}>
                                <span className={s.selectText}>
                                    Show
                                </span>

                    <Select/>

                    <span className={s.selectText}>
                                    Cards per Page
                                </span>
                </div>

            </div>

        </>

    )
}

export default CardsList