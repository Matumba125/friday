import React from "react";
import s from './CardListHead.module.css';
import ButtonFilterHeadTabl from '../buttonFilterHeadTabl/ButtonFilterHeadTabl';

type CardListHeadType = {
    isPackBelongsToUser: boolean
}

const CardListHead: React.FC<CardListHeadType> = props => {

    return (
        <>
        <thead className={s.tableHead}>
            <tr className={s.tabLeine}>
                <th className={s.tableItem}>Question</th>
                <th className={s.tableItem}>Answer</th>
                <th className={s.tableItem}>
                    <ButtonFilterHeadTabl />
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