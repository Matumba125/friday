import React, {MouseEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import CardContainer from '../../common/cardContainer/CardContainer';
import InputForm from '../../common/inputForm/InputForm';
import {updateProfileTC} from '../../store/authReducer';
import {setProfileIsEditingAC} from '../../store/profileReducer';
import {getIsProfileEditing, getUserAvatar, getUserName} from '../../store/selectots';
import {PATH} from '../routing/Routing';

const EditProfile = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const userName = useSelector(getUserName)
    const userAvatar = useSelector(getUserAvatar)
    const isEditing = useSelector(getIsProfileEditing)

    const [name, setName] = useState(userName)
    const [avatar, setAvatar] = useState(userAvatar)



    const onUserNameChangeHandler = (gainedName: string) => {
        setName(gainedName)
    }

    const onUserAvatarChangeHandler = (gainedAvatar: string) => {
        setAvatar(gainedAvatar)
    }

    const onSaveButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(updateProfileTC(name, avatar))
    }

    const onCancelButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setProfileIsEditingAC(false))
    }

    if (!isEditing) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <CardContainer>
            <>
                <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={avatar}/>
                <InputForm
                    text={'Avatar'}
                    inputType={'email'}
                    placeholder={'Enter link to your new avatar'}
                    value={avatar}
                    onChangeText={onUserAvatarChangeHandler}
                />
                <InputForm
                    text={'Nickname'}
                    inputType={'email'}
                    placeholder={'Enter your new nickname'}
                    value={name}
                    onChangeText={onUserNameChangeHandler}
                />
                <ButtonFormColor text={'Cancel'} onClick={onCancelButtonClickHandler}/>
                <ButtonFormColor text={'Save'} onClick={onSaveButtonClickHandler}/>
            </>
        </CardContainer>
    );
};

export default EditProfile;