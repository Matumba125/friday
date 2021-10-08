import React from 'react';
import s from './CardsList.module.css';
import TableHead from '../../common/listCardTableHead/ListCardTableHead';
import ListCardTableLeine from '../../common/listCardTableLeine/ListCardTableLeine'
import {PaginationRounded} from '../../common/pagination/Pagination';
import Select from '../../common/select/Select';
import { CardType } from '../../store/cardsReducer';

type CardsListType = {
    cards: CardType[]
}

const CardsList: React.FC<CardsListType> = props => {

    return (
        <>
            <div className={s.tabWrap}>
                <table className={s.table}>

                    <TableHead/>

                    <tbody className={s.tableBody}>
                    {
                       props.cards.map( m => <ListCardTableLeine card={m}/>)
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