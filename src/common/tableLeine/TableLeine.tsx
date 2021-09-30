import React from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';

type TableLinePropsType ={
    packName: string
    cardsCount: number
    created: Date
    userName: string
}

const TableLeine: React.FC<TableLinePropsType> = props => {
    
    const{
        packName,
        cardsCount,
        created,
        userName,
        ...restProps
    } = props

    return (
        <>
            <tr className={s.tabLeine}>
                <td className={s.tableBodyItem}>{packName}</td>
                <td className={s.tableBodyItem}>{cardsCount}</td>
                <td className={s.tableBodyItem}>{created}</td>
                <td className={s.tableBodyItem}>{userName}</td>
                <td className={s.tableBodyItem}>
                    <div className={s.tableButtonsblock}>
                       <ButtonTabDelete/>
                      <ButtonTabEdit/>
                       <ButtonLearn/>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLeine;