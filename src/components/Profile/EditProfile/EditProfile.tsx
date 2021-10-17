import React, {MouseEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import s from './EditProfile.module.css';
import CardContainer from '../../../common/cardContainer/CardContainer';
import InputForm from '../../../common/inputForm/InputForm';
import Avatar from '../../../common/avatar/Avatar';
import ButtonFormColor from '../../../common/buttonFormColor/ButtonFormColor';
import {setProfileIsEditingAC, updateProfileTC} from '../../../store/profileReducer';
import {getIsProfileEditing, getUserAvatar, getUserName} from '../../../store/selectots';
import {PATH} from '../../routing/Routing';
import ListTitle from '../../../common/listTititle/ListTitile';

const EditProfile = () => {

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
    };

    const onSaveButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(updateProfileTC({ name, avatar }))
    }

    const onCancelButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setProfileIsEditingAC({ isEditing: false }))
    }

    if (!isEditing) {
        return <Redirect to={PATH.PROFILE} />
    }

    return (
        <CardContainer>
            <>
                <div className={s.listTitleBox}>
                    <ListTitle text={'Personal Information'}/>
                </div>

                <div className={s.containerWrap}>
                    <div className={s.avatarBox}>
                        <Avatar />
                    </div>
                    <div className={s.inputBox}>
                        <InputForm
                            text={'Avatar'}
                            inputType={'text'}
                            placeholder={'Enter link to your new avatar'}
                            value={avatar}
                            onChangeText={onUserAvatarChangeHandler}
                        />
                        <InputForm
                            text={'Nickname'}
                            inputType={'text'}
                            placeholder={'Enter your new nickname'}
                            value={name}
                            onChangeText={onUserNameChangeHandler}
                        />
                    </div>

                    <div className={s.buttonsBox}>

                        <ButtonFormColor text={'Cancel'} onClick={onCancelButtonClickHandler} />

                        <div className={s.buttonWrap}>
                            <ButtonFormColor text={'Save'} onClick={onSaveButtonClickHandler} />
                        </div>

                    </div>
                </div>
            </>
        </CardContainer>
    );
};

export default EditProfile;