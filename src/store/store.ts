import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import {passwordReducer} from "./passwordReducer";
import {loginizationReducer} from "./loginizationReducer";
import {profileReducer} from "./profileReducer";
import {registrationReducer} from "./registrationReducer";
import { appReducer } from "./appReducer";
import { cardsPacksReducer } from "./cardsPacksReducer";
import { cardsReducer } from "./cardsReducer";


export const rootReducer = combineReducers({
    password: passwordReducer,
    loginization: loginizationReducer,
    profile: profileReducer,
    registration: registrationReducer,
    app: appReducer,
    cardsPack: cardsPacksReducer,
    cards: cardsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store

export default store