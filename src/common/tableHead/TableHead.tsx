import React from "react";
import s from './TableHead.module.css';

const TableHead = () => {

    return (
        <>
            <thead className={s.tableHead}>
                <tr className={s.tabLeine}>
                    <th className={s.tableHeadItem}>Name</th>
                    <th className={s.tableHeadItem}>Cards</th>
                    <th className={s.tableHeadItem}>
                        <button className={s.buttonHead}>
                            Last Updated
                            <div className={s.buttonArrow}>
                            </div>
                        </button>
                    </th>
                    <th className={s.tableHeadItem}>
                        Created by
                    </th>
                    <th className={s.tableHeadItem}>Actions</th>
                </tr>
            </thead>
        </>
    )
}

export default TableHead;