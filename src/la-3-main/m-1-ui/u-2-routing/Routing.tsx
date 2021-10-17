import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Packs from '../../../la-2-features/f-1-packs/p-1-ui/Packs';
import Cards from '../../../la-2-features/f-2-cards/c-1-ui/Cards';
import Loginization from '../../../la-2-features/f-3-loginization/l-1-ui/Loginization';
import LearnQuestion from '../../../la-2-features/learnQuestion/LearnQuestion';
import NewPassword from '../../../la-2-features/newPassword/NewPassword';
import NotFound from '../../../la-2-features/NotFound/NotFound';
import PasswordRecovery from '../../../la-2-features/passwordRecovery/PasswordRecovery';
import EditProfile from '../../../la-2-features/Profile/EditProfile/EditProfile';
import Profile from '../../../la-2-features/Profile/Profile';
import Registration from '../../../la-2-features/registration/Registration';

export const PATH ={
    LOGIN: '/login',
    NOT_FOUND: '/404',
    NEW_PASSWORD: '/new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    EDIT_PROFILE: '/edit-profile',
    REGISTRATION: '/registration',
    PACKS: '/packs',
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
                <Route path={PATH.PACKS} render={()=> <Packs/>} />
                <Route path={PATH.CARDS} render={()=><Cards/>}/>
                <Route path={PATH.LEARN_QUESTION} render={()=><LearnQuestion/>} />
            </Switch>
        </>
    );
};

export default Routing;