import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk"
import {passwordReducer} from "../../store/passwordReducer";
import {loginizationReducer} from "../../store/loginizationReducer";
import {profileReducer} from "../../store/profileReducer";
import {registrationReducer} from "../../store/registrationReducer";
import {appReducer} from "./appReducer";
import {configureStore} from "@reduxjs/toolkit";
import { cardsReducer } from "../../la-2-features/f-2-cards/c-2-bll/cardsReducer";
import { packsReducer } from "../../la-2-features/f-1-packs/p-2-bll/packsReducer";


export const rootReducer = combineReducers({
    password: passwordReducer,
    loginization: loginizationReducer,
    profile: profileReducer,
    registration: registrationReducer,
    app: appReducer,
    packs: packsReducer,
    cards: cardsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppStateType = ReturnType<typeof rootReducer>

export default store