import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';
import {useDispatch, useSelector} from "react-redux";
import {updateCardsPackTC} from "../../store/cardsPacksReducer";
import {getCurrentUserIdAvatar} from "../../store/selectots";
import ModalDeletePack from "../../components/modalDeletePack/ModalDeletePack";

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

    const currentUserId = useSelector(getCurrentUserIdAvatar)

    const[deleting, setDeleting] = useState<boolean>(false)
    const[packEditing, setPackEditing] = useState<boolean>(false)
    const[newPackName, setNewPackName] = useState<string>(packName)

    const onDeleteButtonClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setDeleting(true)
    }

    const onEditButtonClickHandler = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setPackEditing(!packEditing)
    }

    const onNewPackNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewPackName(e.currentTarget.value)
    }

    const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.code === 'Enter'){
            dispatch(updateCardsPackTC({name: newPackName, packId: _id}))
            setPackEditing(false)
        }
    }

    const isPacksBelogsToUser = user_id === currentUserId

    const newDate = new Intl.DateTimeFormat().format(new Date(created))

    return (
        <>
            <ModalDeletePack packName={packName} setClose={setDeleting} packId={_id} open={deleting}/>
            <tr className={s.tableLine}>
                {packEditing ?
                    <td className={s.tableItem}><input className={s.input} value={newPackName}
                                                       onChange={onNewPackNameChangeHandler}
                                                       onKeyPress={onInputKeyPress}/>
                    </td>
                    : <td className={s.tableItem}>{packName}</td>
                }
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
                            <ButtonLearn/>
                        </div>

                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLine;