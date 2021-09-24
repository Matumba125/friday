import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Loginization from '../loginization/Loginization';
import NotFound from "../NotFound/NotFound";
import NewPassword from "../newPassword/NewPassword";
import PasswordRecovery from "../passwordRecovery/PasswordRecovery";
import Profile from "../profile/Profile";
import Registration from "../registration/Registration";

export const PATH ={
    LOGIN: 'friday/login',
    NOT_FOUND: 'friday/404',
    NEW_PASSWORD: 'friday/new-password',
    PASSWORD_RECOVERY: 'friday/password-recovery',
    PROFILE: 'friday/profile',
    REGISTRATION: 'friday/registration',
}
const Routing = () => {
    return (
        <>
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