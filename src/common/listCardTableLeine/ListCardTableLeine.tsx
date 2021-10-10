import React, {MouseEvent, useState} from "react";
import s from './ListCardTableLeine.module.css';
import {CardType} from "../../store/cardsReducer";
import ModalDeleteCard from "../../components/CardsModals/modalDeleteCard/ModalDeleteCard";
import ModalEditCard from "../../components/CardsModals/modalEditCard/ModalEditCard";
import {HoverRating} from "../rating/Rating";
import ButtonFormColor from "../buttonFormColor/ButtonFormColor";

type ListCardTableLeinePropsType = {
    card: CardType
    isPackBelongsToUser: boolean
}

const ListCardTableLeine: React.FC<ListCardTableLeinePropsType> = props => {

    const {
        card,
        isPackBelongsToUser,
    } = props

    const newDate = new Intl.DateTimeFormat().format(new Date(card.created))

    const [deleteCard, setDeleteCard] = useState<boolean>(false)
    const [editCard, setEditCard] = useState<boolean>(false)

    const onDeleteClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setDeleteCard(true)
    }
    const onEditClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setEditCard(true)
    }

    return (
        <>
            <ModalDeleteCard open={deleteCard} setClose={setDeleteCard} cardId={card._id} />
            <ModalEditCard open={editCard} setOpen={setEditCard} cardId={card._id} question={card.question} answer={card.answer} />
            <tr className={s.tableLine}>
                <td className={s.tableItem}>{card.question}</td>
                <td className={s.tableItem}>{card.answer}</td>
                <td className={s.tableItem}>{newDate}</td>
                <td className={s.tableItem}><HoverRating grade={card.grade}/></td>
                {isPackBelongsToUser ?
                    <td className={s.tableItem}>
                        <div className={s.tableButtonsblock}>
                            <div className={s.buttonContainer}>
                                <ButtonFormColor text={'Delete'} onClick={onDeleteClickHandler}/>
                            </div>
                            <div className={s.buttonContainer}>
                                <ButtonFormColor text={'Edit'} onClick={onEditClickHandler}/>
                            </div>
                        </div>
                    </td>
                    :<></>
                }
            </tr>
        </>

    )
}

export default ListCardTableLeine