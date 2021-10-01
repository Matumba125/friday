import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setPageCountAC} from "../../store/cardsPacksReducer";
import {getPageCount} from "../../store/selectots";
import s from "./Select.module.css";

const Select = () => {

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageCountAC({pageCount: +e.currentTarget.value}))
    }


    return (
        <>
            <div className={s.selectWrap}>
                <select className={s.select} onChange={onChangeHandler} name="pages">
                    <option className={s.selectItem}value={10}>10</option>
                    <option className={s.selectItem} value={20}>20</option>
                    <option className={s.selectItem} value={30}>30</option>
                </select>
            </div>
        </>
    )
}

export default Select;
