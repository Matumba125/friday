import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import {passwordReducer} from "./passwordReducer";
import {loginizationReducer} from "./loginizationReducer";
import {profileReducer} from "./profileReducer";
import {registrationReducer} from "./registrationReducer";


export const rootReducer = combineReducers({
    password: passwordReducer,
    loginization: loginizationReducer,
    profile: profileReducer,
    registration: registrationReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store