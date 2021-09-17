import React from 'react';
import {Route, Switch} from "react-router";
import Loginization from '../loginization/Loginization';
import NotFound from "../NotFound/NotFound";
import NewPassword from "../newPassword/NewPassword";
import PasswordRecovery from "../passwordRecovery/PasswordRecovery";
import Profile from "../profile/Profile";
import Registration from "../registration/Registration";
import TestComponent from "../test/TestComponent";

export const PATH ={
    LOGIN: '/login',
    NOT_FOUND: '/404',
    NEW_PASSWORD: '/new-password',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
}

const Routing = () => {
    return (
        <>
            <Switch>
                <Route path={PATH.LOGIN} render={()=> <Loginization/>} />
                <Route path={PATH.NOT_FOUND} render={()=> <NotFound/>} />
                <Route path={PATH.NEW_PASSWORD} render={()=> <NewPassword/>} />
                <Route path={PATH.PASSWORD_RECOVERY} render={()=> <PasswordRecovery/>} />
                <Route path={PATH.PROFILE} render={()=> <Profile/>} />
                <Route path={PATH.REGISTRATION} render={()=> <Registration/>} />
                <Route exact path={'/'} render={()=> <TestComponent/>}/>

            </Switch>
        </>
    );
};

export default Routing;