import React from 'react';
import s from '.Profile.module.css'
import Header from '../../common/header/Header';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../store/selectots';
import { Redirect } from 'react-router-dom';
import { PATH } from '../routing/Routing';

const Profile = React.memo(() => {
    
    const isLoggedIn = useSelector(getIsLoggedIn)
    
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