import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Loginization from '../loginization/Loginization';
import NotFound from "../NotFound/NotFound";
import NewPassword from "../newPassword/NewPassword";
import PasswordRecovery from "../passwordRecovery/PasswordRecovery";
import Profile from "../profile/Profile";
import Registration from "../registration/Registration";
import EditProfile from '../editProfile/EditProfile';
import CardsPacks from '../cardsPacks/CardsPacks';
import LearnQuestion from '../learnQuestion/LearnQuestion';
import Cards from '../Cards/Cards';

export const PATH ={
    LOGIN: '/login',
    NOT_FOUND: '/404',
    NEW_PASSWORD: '/new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    EDIT_PROFILE: '/edit-profile',
    REGISTRATION: '/registration',
    CARDS_PACKS: '/cards-packs',
    CARDS: '/cards',
    LEARN_QUESTION: '/learn-question',
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
                <Route path={PATH.EDIT_PROFILE} render={()=> <EditProfile/>} />
                <Route path={PATH.REGISTRATION} render={()=> <Registration/>} />
                <Route path={PATH.CARDS_PACKS} render={()=> <CardsPacks/>} />
                <Route path={PATH.CARDS} render={()=><Cards/>}/>
                <Route path={PATH. LEARN_QUESTION} render={()=><LearnQuestion/>} />
            </Switch>
        </>
    );
};

export default Routing;