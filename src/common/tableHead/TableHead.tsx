import React from "react";
 import s from './TableHead.module.css';
import ButtonFilterHeadTabl from '../buttonFilterHeadTabl/ButtonFilterHeadTabl';

const TableHead = () => {

    return (
        <>
            <thead className={s.tableHead}>
                <tr className={s.tabLeine}>
                    <th className={s.tableItem}>Name</th>
                    <th className={s.tableItem}>Cards</th>
                    <th className={s.tableItem}>
                        <ButtonFilterHeadTabl />
                    </th>
                    <th className={s.tableItem}>
                        Created by
                    </th>
                    <th className={s.tableItem}>Actions</th>
                </tr>
            </thead>
        </>
    )
}

export default TableHead;