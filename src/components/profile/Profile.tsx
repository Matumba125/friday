import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getIsProfileEditing, getUserAvatar, getUserName} from '../../store/selectots';
import {Redirect} from 'react-router-dom';
import {PATH} from '../routing/Routing';
import {setProfileIsEditingAC} from '../../store/profileReducer';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';

const Profile = () => {
    
    const dispatch = useDispatch()
    
    const isLoggedIn = useSelector(getIsLoggedIn)
    const isEditing = useSelector(getIsProfileEditing)
    const userName = useSelector(getUserName)
    const userAvatar = useSelector(getUserAvatar)


    useEffect(()=>{},[userAvatar, userName])

    const onEditButtonClick = () =>{
        dispatch(setProfileIsEditingAC(true))
    }
    
    if(isEditing){
        return <Redirect to={PATH.EDIT_PROFILE}/>
    }
    
    if(!isLoggedIn){
        return <Redirect to={PATH.LOGIN}/>
    }
    
    return (
        <>
            <img style={{width: '50px', height: '50px', borderRadius: '50%'}}  src={userAvatar}/>
            <span>{userName}</span>
            <ButtonFormColor text={'Edit profile'} onClick={onEditButtonClick}/>
        </>
    );
}

export default Profile;