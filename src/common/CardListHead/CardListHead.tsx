import React, { useState } from "react";
import s from './CardListHead.module.css';
import ButtonFilterHeadTabl from '../buttonFilterHeadTabl/ButtonFilterHeadTabl';
import { useDispatch } from "react-redux";
import { setSortCards } from "../../store/cardsReducer";

type CardListHeadType = {
    isPackBelongsToUser: boolean
}

const CardListHead: React.FC<CardListHeadType> = props => {

    const dispatch = useDispatch()

    const [cardsSort, setCardsSort] = useState<0 | 1>(0)
    
    const onSortChange = ()=>{
        if(cardsSort === 0){
            dispatch(setSortCards({cardsSort: 1}))
            setCardsSort(1)
        }
        if(cardsSort === 1){
            dispatch(setSortCards({cardsSort: 0}))
            setCardsSort(0)
        }
    }


    return (
        <>
        <thead className={s.tableHead}>
            <tr className={s.tabLeine}>
                <th className={s.tableItem}>Question</th>
                <th className={s.tableItem}>Answer</th>
                <th className={s.tableItem}>
                    <ButtonFilterHeadTabl direction={cardsSort} setDirection={onSortChange}/>
                </th>
                <th className={s.tableItem}>
                   Grade
                </th>
                {props.isPackBelongsToUser &&   <th className={s.tableItem}>Actions</th>}
            </tr>
        </thead>
    </>
    )
}

export default CardListHead