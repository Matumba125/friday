import React from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';

const TableLeine = () => {

    return (
        <>
            <tr className={s.tabLeine}>
                <td className={s.tableBodyItem}>Pack Name</td>
                <td className={s.tableBodyItem}>4</td>
                <td className={s.tableBodyItem}>18.03.2021</td>
                <td className={s.tableBodyItem}>Ivan Ivanov</td>
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