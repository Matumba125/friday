import React from "react";
import s from './ListCardTableHead.module.css';
import ButtonFilterHeadTabl from '../buttonFilterHeadTabl/ButtonFilterHeadTabl';

const ListCardTableHead = () => {

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
                <th className={s.tableItem}>Actions</th>
            </tr>
        </thead>
    </>
    )
}

export default ListCardTableHead