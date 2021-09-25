import React, { useEffect } from 'react';
import {Redirect, Route, Switch} from "react-router";
import Loginization from '../loginization/Loginization';
import NotFound from "../NotFound/NotFound";
import NewPassword from "../newPassword/NewPassword";
import PasswordRecovery from "../passwordRecovery/PasswordRecovery";
import Profile from "../profile/Profile";
import Registration from "../registration/Registration";
import {useDispatch, useSelector } from 'react-redux';
import {getIsLoading, getIsLoggedIn } from '../../store/selectots';
import { authMeTC } from '../../store/loginizationReducer';
import IsLoading from '../../common/isLoading/IsLoading';

export const PATH ={
    LOGIN: '/login',
    NOT_FOUND: '/404',
    NEW_PASSWORD: '/new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
}
const Routing = () => {

    const isLoggedIn = useSelector(getIsLoggedIn)
    const isLoading = useSelector(getIsLoading)

    const dispatch = useDispatch()

    useEffect(() => {
       if(!isLoggedIn) dispatch(authMeTC())
    }, [])

    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return (
        <>
            {isLoading && <IsLoading/>}
            <Switch>
                <Route exact path={'/'} render={()=> <Redirect to={PATH.LOGIN}/>} />
                <Route path={PATH.LOGIN} render={()=> <Loginization/>} />
                <Route path={PATH.NOT_FOUND} render={()=> <NotFound/>} />
                <Route path={PATH.NEW_PASSWORD} render={()=> <NewPassword/>} />
                <Route path={PATH.PASSWORD_RECOVERY} render={()=> <PasswordRecovery/>} />
                <Route path={PATH.PROFILE} render={()=> <Profile/>} />
                <Route path={PATH.REGISTRATION} render={()=> <Registration/>} />
            </Switch>
        </>
    );
};

export default Routing;