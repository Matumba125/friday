import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk"
import {passwordReducer} from "./passwordReducer";
import {loginizationReducer} from "./loginizationReducer";
import {profileReducer} from "./profileReducer";
import {registrationReducer} from "./registrationReducer";
import {appReducer} from "./appReducer";
import {cardsPacksReducer} from "./cardsPacksReducer";
import {cardsReducer} from "./cardsReducer";
import {configureStore} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    password: passwordReducer,
    loginization: loginizationReducer,
    profile: profileReducer,
    registration: registrationReducer,
    app: appReducer,
    cardsPack: cardsPacksReducer,
    cards: cardsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppStateType = ReturnType<typeof rootReducer>

export default store