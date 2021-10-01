import React from "react";
import s from './TableHead.module.css';

const TableHead = () => {

    return (
        <>
            <thead className={s.tableHead}>
                <tr className={s.tabLeine}>
                    <th className={s.tableItem}>Name</th>
                    <th className={s.tableItem}>Cards</th>
                    <th className={s.tableItem}>
                        <button className={s.buttonHead}>
                            Last Updated
                            <div className={s.buttonArrow}>
                            </div>
                        </button>
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