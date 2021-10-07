import React, { MouseEvent } from "react";
import s from './ListCardTableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import HoverRating from '../rating/Rating';
import { useDispatch } from "react-redux";
import { deleteCardsPackTC } from "../../store/cardsPacksReducer";

// type ListCardTableLeinePropsType = {
//     packName: string
//     cardsCount: number
//     created: Date
//     userName: string
//     _id: string
//     user_id: string
// }

const ListCardTableLeine = () => {

    //     const {
    //         packName,
    //         cardsCount,
    //         created,
    //         userName,
    //         _id,
    //         user_id,
    //         ...restProps
    //     } = props

    // const dispatch = useDispatch()

    // const onDeleteButtonClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
    //     e.preventDefault()
    //     dispatch(deleteCardsPackTC(_id))
    // }

    // const isPacksBelogsToUser = _id === user_id

    // const newDate = new Intl.DateTimeFormat().format(new Date(created))


    return (
        <>
            <tr className={s.tableLine}>
                <td className={s.tableItem}>How "This" works in JavaScript?</td>
                <td className={s.tableItem}>This is how "This" works in JavaScript</td>
                <td className={s.tableItem}>18.03.2021</td>
                <td className={s.tableItem}><HoverRating/></td>
                <td className={s.tableItem}>
                    <div className={s.tableButtonsblock}>
                        <>
                            <div className={s.buttonContainer}>
                                <ButtonTabDelete />
                            </div>
                            <div className={s.buttonContainer}>
                                <ButtonTabEdit />
                            </div>
                        </>
                    </div>
                </td>
            </tr>
        </>

    )
}

export default ListCardTableLeine