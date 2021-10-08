import React from "react";
import s from './ListCardTableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import HoverRating from '../rating/Rating';
import {useSelector} from "react-redux";
import {CardType} from "../../store/cardsReducer";
import {getCurrentUserId} from "../../store/selectots";

type ListCardTableLeinePropsType = {
    card: CardType
}

const ListCardTableLeine: React.FC<ListCardTableLeinePropsType> = props => {

    const {
        card,
        ...restProps
    } = props

    const currentUserId = useSelector(getCurrentUserId)

    // const dispatch = useDispatch()

    // const onDeleteButtonClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
    //     e.preventDefault()
    //     dispatch(deleteCardsPackTC(_id))
    // }

    const isCardsBelogsToUser = card.user_id === currentUserId

    const newDate = new Intl.DateTimeFormat().format(new Date(card.created))


    return (
        <>
            <tr className={s.tableLine}>
                <td className={s.tableItem}>{card.question}</td>
                <td className={s.tableItem}>{card.answer}</td>
                <td className={s.tableItem}>{newDate}</td>
                <td className={s.tableItem}><HoverRating/></td>
                <td className={s.tableItem}>
                    {isCardsBelogsToUser ?
                        <div className={s.tableButtonsblock}>
                            <div className={s.buttonContainer}>
                                <ButtonTabDelete/>
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