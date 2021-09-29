import React from "react";
import s from './TableHead.module.css';

const TableHead = () => {

    return (
        <>
            <thead className={s.tableHead}>
                <tr className={s.tabLeine}>
                    <th className={s.tableHeadItem}>Name</th>
                    <th className={s.tableHeadItem}>Cards</th>
                    <th className={s.tableHeadItem}>Last Updated</th>
                    <th className={s.tableHeadItem}>Created by</th>
                    <th className={s.tableHeadItem}>Actions</th>
                </tr>
            </thead>
        </>
    )
}

export default TableHead;