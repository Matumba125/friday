import React, { useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setSortPacksAC } from "../../store/cardsPacksReducer";
import s from './TableHead.module.css';

const TableHead = () => {
    
    const dispatch = useDispatch()
    
    const [direction, setDirection] = useState<0 | 1>(0)
    
    const onChangeDirection = (e: MouseEvent<HTMLButtonElement>) =>{
        if(direction === 0){
            dispatch(setSortPacksAC({sortPacks: 1}))
            setDirection(1)
        }else{
            dispatch(setSortPacksAC({sortPacks: 0}))
            setDirection(0)
        } 
    }

    return (
        <>
            <thead className={s.tableHead}>
                <tr className={s.tabLeine}>
                    <th className={s.tableItem}>Name</th>
                    <th className={s.tableItem}>Cards</th>
                    <th className={s.tableItem}>
                        <button className={s.buttonHead} onClick={onChangeDirection}>
                            Last Updated
                            <div id={'arrowBtn'} className={s.buttonArrow}>
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