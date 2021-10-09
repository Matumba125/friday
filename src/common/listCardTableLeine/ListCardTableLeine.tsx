import React, { useState, MouseEvent } from "react";
import s from './ListCardTableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import HoverRating from '../rating/Rating';
import {CardType} from "../../store/cardsReducer";
import ModalDeleteCard from "../../components/CardsModals/modalDeleteCard/ModalDeleteCard";

type ListCardTableLeinePropsType = {
    card: CardType
    isPackBelongsToUser: boolean
}

const ListCardTableLeine: React.FC<ListCardTableLeinePropsType> = props => {

    const {
        card,
        isPackBelongsToUser,
        ...restProps
    } = props

    const newDate = new Intl.DateTimeFormat().format(new Date(card.created))

    const [deleteCard, setDeleteCard] = useState<boolean>(false)

    const onDeleteClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setDeleteCard(true)
    }

    return (
        <>
            <ModalDeleteCard open={deleteCard} setClose={setDeleteCard} cardId={card._id} />
            <tr className={s.tableLine}>
                <td className={s.tableItem}>{card.question}</td>
                <td className={s.tableItem}>{card.answer}</td>
                <td className={s.tableItem}>{newDate}</td>
                <td className={s.tableItem}><HoverRating/></td>
                <td className={s.tableItem}>
                    {isPackBelongsToUser ?
                        <div className={s.tableButtonsblock}>
                            <div className={s.buttonContainer}>
                                <ButtonTabDelete  onClick={onDeleteClickHandler} />
                            </div>
                            <div className={s.buttonContainer}>
                                <ButtonTabEdit/>
                            </div>
                        </div>
                        :<></>
                    }
                </td>
            </tr>
        </>

    )
}

export default ListCardTableLeine