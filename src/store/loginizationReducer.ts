import {Dispatch} from "redux"
import {authApi, LoginParamsType} from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setUserDataAC } from "./profileReducer"


const inititialState = {
    isLoggedIn: false,
    error: '',
}
type LoginizationReducerInititialStateType = typeof inititialState

type LoginizationReducerActionType = ReturnType<typeof setLoggedAC>
    | ReturnType<typeof setLoginErrorAC>

export const loginizationReducer = (state: LoginizationReducerInititialStateType = inititialState, action: LoginizationReducerActionType): LoginizationReducerInititialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-ERROR':
            return {...state, error: action.error}
        case 'LOGIN/SET-LOGGED':
            return {...state, isLoggedIn: action.isLoggedIn}
    }
    return state;
}

//action
export const setLoggedAC = (isLoggedIn: boolean) => ({type: 'LOGIN/SET-LOGGED', isLoggedIn} as const)
export const setLoginErrorAC = (error: string) => ({type: 'LOGIN/SET-ERROR', error} as const)

//thunks
export const loginTC = (data: LoginParamsType) =>(
    (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        authApi.login(data)
        .then((res) => {
            dispatch(setIsLoading(false))
            dispatch(setLoggedAC(true))
            dispatch(setUserDataAC(res.data))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(setLoggedAC(false))
            dispatch(setLoginErrorAC(error.response.data.error))
        })

})
