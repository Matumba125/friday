import React, {MouseEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import s from './EditProfile.module.css';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import ButtonFormCancel from '../../common/buttonFormCancel/ButtonFormCancel';
import CardContainer from '../../common/cardContainer/CardContainer';
import InputForm from '../../common/inputForm/InputForm';
import Avatar from '../../common/avatar/Avatar';
import ListTitle from '../../common/listTitle/ListTitle';
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
    };

    const onSaveButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
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
            <div className={s.listTitleBox}>
                  <ListTitle
            text={'Personal Information'}
            /> 
            </div>
         
              <div className={s.containerWrap }              >
                  <div className={s.avatarBox}>
                        <Avatar/>
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
                      <div className={s.buttonWrap}>
                            <ButtonFormColor text={'Cancel'} onClick={onCancelButtonClickHandler}/>
                      </div>
                      <div className={s.buttonWrap}>
                            <ButtonFormColor text={'Save'} onClick={onSaveButtonClickHandler}/>
                      </div>
                      
                   </div>
              </div>
            </>
        </CardContainer>
    );
};

export default EditProfile;