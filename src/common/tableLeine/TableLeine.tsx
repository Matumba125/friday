import React, {MouseEvent, useState} from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserId} from "../../store/selectots";
import {Link, Redirect} from "react-router-dom";
import {PATH} from "../../components/routing/Routing";
import {getCards, setCurrentPackId} from "../../store/cardsReducer";
import ModalDeletePack from "../../components/PackModals/modalDeletePack/ModalDeletePack";
import ModalEditPack from "../../components/PackModals/modalEditPack/ModalEditPack";

type TableLinePropsType = {
    packName: string
    cardsCount: number
    updated: Date
    userName: string
    _id: string
    user_id: string
}

const TableLine: React.FC<TableLinePropsType> = props => {

    const {
        packName,
        cardsCount,
        updated,
        userName,
        _id,
        user_id,
        ...restProps
    } = props

    const dispatch = useDispatch()

    const currentUserId = useSelector(getCurrentUserId)

    const[deleting, setDeleting] = useState<boolean>(false)
    const[packEditing, setPackEditing] = useState<boolean>(false)

    const onDeleteButtonClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setDeleting(true)
    }

    const onEditButtonClickHandler = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setPackEditing(!packEditing)
    }
    const onLinkClickHandler = ()=>{
        dispatch(setCurrentPackId({currentPackId: _id}))
    }

    const onLearnClickHandler = () =>{
        dispatch(setCurrentPackId({currentPackId: _id}))
        dispatch(getCards(_id))
    }

    const isPacksBelogsToUser = user_id === currentUserId

    const newDate = new Intl.DateTimeFormat().format(new Date(updated))

    return (
        <>
            <ModalDeletePack packName={packName} setClose={setDeleting} packId={_id} open={deleting}/>
            <ModalEditPack packName={packName} packId={_id} open={packEditing} setClose={setPackEditing}/>
            <tr className={s.tableLeine}>
                <td className={s.tableItem}><Link to={PATH.CARDS} onClick={onLinkClickHandler}>{packName}</Link></td>
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
                                {isPacksBelogsToUser && <ButtonTabEdit onClick={onEditButtonClickHandler}/>}
                            </div>
                        </>
                        <div className={s.buttonContainer}>
                            <Link to={PATH.LEARN_QUESTION}><ButtonLearn onClick={onLearnClickHandler}/></Link>
                        </div>

                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLine;