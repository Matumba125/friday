import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getIsProfileEditing, getUserAvatar, getUserName} from '../../store/selectots';
import {Redirect} from 'react-router-dom';
import {PATH} from '../routing/Routing';
import s from './Profile.module.css';
import Avatar from '../../common/avatar/Avatar';
import {setProfileIsEditingAC} from '../../store/profileReducer';


const Profile = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector(getIsLoggedIn)
    const isEditing = useSelector(getIsProfileEditing)
    const userName = useSelector(getUserName)
    const userAvatar = useSelector(getUserAvatar)


    useEffect(() => { }, [userAvatar, userName])

    const onEditButtonClick = () => {
        dispatch(setProfileIsEditingAC({isEditing: true}))
    }

    if (isEditing) {
        return <Redirect to={PATH.EDIT_PROFILE} />
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }

    return (
        <>

            <div className={s.profileInner}>
                <div className={s.profileWrap}>

                  <Avatar/>

                    <span className={s.userName}>{userName}</span>

                    <span className={s.userProfession}>Front-end developer</span>

                    <button className={s.buttonProfile} onClick={onEditButtonClick}>
                        Edit profile
                    </button>

                </div>
            </div>

        </>
    );
}

export default Profile;