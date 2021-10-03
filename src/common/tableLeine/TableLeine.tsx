import React, {MouseEvent} from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';
import { useDispatch } from "react-redux";
import { deleteCardsPackTC } from "../../store/cardsPacksReducer";

type TableLinePropsType = {
    packName: string
    cardsCount: number
    created: Date
    userName: string
    _id: string
    user_id: string
}

const TableLine: React.FC<TableLinePropsType> = props => {

    const {
        packName,
        cardsCount,
        created,
        userName,
        _id,
        user_id,
        ...restProps
    } = props

    const dispatch = useDispatch()

    const onDeleteButtonClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        dispatch(deleteCardsPackTC(_id))
    }

    const isPacksBelogsToUser = _id === user_id

    const newDate = new Intl.DateTimeFormat().format(new Date(created))

    return (
        <>
            <tr className={s.tableLine}>
                <td className={s.tableItem}>{packName}</td>
                <td className={s.tableItem}>{cardsCount}</td>
                <td className={s.tableItem}>{newDate}</td>
                <td className={s.tableItem}>{userName}</td>
                <td className={s.tableItem}>
                    <div className={s.tableButtonsblock}>
                        <>
                            <div className={s.buttonContainer}>
                                {isPacksBelogsToUser && <ButtonTabDelete onClick={onDeleteButtonClickHandler}/>}
                            </div>
                            <div className={s.buttonContainer}>
                                {isPacksBelogsToUser && <ButtonTabEdit/>}
                            </div>
                        </>
                        <div className={s.buttonContainer}>
                            <ButtonLearn/>
                        </div>

                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLine;