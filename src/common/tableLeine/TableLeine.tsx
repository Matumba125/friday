import React from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';

type TableLinePropsType = {
    packName: string
    cardsCount: number
    created: Date
    userName: string
    _id: string
    user_id: string
}

const TableLeine: React.FC<TableLinePropsType> = props => {

    const {
        packName,
        cardsCount,
        created,
        userName,
        ...restProps
    } = props

    const isPacksBelogsToUser = restProps._id === restProps.user_id

    const newDate = new Intl.DateTimeFormat().format(new Date(created))


    return (
        <>
            <tr className={s.tabLeine}>
                <td className={s.tableItem}>{packName}</td>
                <td className={s.tableItem}>{cardsCount}</td>
                <td className={s.tableItem}>{newDate}</td>
                <td className={s.tableItem}>{userName}</td>
                <td className={s.tableItem}>
                    <div className={s.tableButtonsblock}>
                         <div className={s.buttonContainer}>
                            <ButtonTabDelete />
                        </div> 
                        <div className={s.buttonContainer}>
                            {/* <ButtonTabEdit /> */}
                        </div>
                      <div className={s.buttonContainer}>
                            <ButtonLearn />
                      </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLeine;