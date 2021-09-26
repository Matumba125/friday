import React from 'react';
import s from '.Profile.module.css'
import Header from '../../common/header/Header';
import {useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getIsProfileEditing } from '../../store/selectots';
import { Redirect } from 'react-router-dom';
import { PATH } from '../routing/Routing';
import { setProfileIsEditingAC } from '../../store/profileReducer';

const Profile = React.memo(() => {
    
    const dispatch = useDispatch()
    
    const isLoggedIn = useSelector(getIsLoggedIn)
    const isEditing = useSelector(getIsProfileEditing)
    
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
        {/* <Header/> */}
        </>
    );
})

export default Profile;