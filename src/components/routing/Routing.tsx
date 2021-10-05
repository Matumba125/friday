import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import Loginization from '../loginization/Loginization';
import NotFound from "../NotFound/NotFound";
import NewPassword from "../newPassword/NewPassword";
import PasswordRecovery from "../passwordRecovery/PasswordRecovery";
import PackList from "../packList/PackList";
import Profile from "../profile/Profile";
import Registration from "../registration/Registration";
import EditProfile from '../editProfile/EditProfile';
import CardsPacks from '../cardsPacks/CardsPacks';
import ListCard from '../listCard/ListCard';
import AddNewCard from '../addNewCard/AddNewCard';

export const PATH ={
    LOGIN: '/login',
    NOT_FOUND: '/404',
    NEW_PASSWORD: '/new-password/:token',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    EDIT_PROFILE: '/edit-profile',
    REGISTRATION: '/registration',
    CARDS_PACKS: '/cards-packs',
    PACK_LIST: '/pack-list',
    LISR_CARD: '/list-card',
    ADD_NEWCARD: '/add-newcard'
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
                <Route path={PATH.PACK_LIST} render={()=><PackList/>}/>
                <Route path={PATH. LISR_CARD} render={()=><ListCard/>}/>
                <Route path={PATH. ADD_NEWCARD} render={()=><AddNewCard/>} />
            </Switch>
        </>
    );
};

export default Routing;