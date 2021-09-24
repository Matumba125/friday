import { Dispatch } from "redux"
import { authApi, LoginParamsType } from "../api/auth-api"


const inititialState = {
    isLoggedIn: false,
    error: '',
    userData: {
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: ''
    }
}
type LoginizetionReducerInititialStateType = typeof inititialState

type LoginizetionReducerActionType = ReturnType<typeof setLoggedAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setUserDataAC>

export const loginizationReducer = (state: LoginizetionReducerInititialStateType = inititialState, action: LoginizetionReducerActionType): LoginizetionReducerInititialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-ERROR':
            return { ...state, error: action.error }
        case 'LOGIN/SET-LOGGED':
            return { ...state, isLoggedIn: action.value }
        case 'LOGIN/SET-USER-DATA':
            return {...state, userData: action.data}
    }
    return state;
}

//action
export const setUserDataAC = (data:UserDataType) => ({type: 'LOGIN/SET-USER-DATA', data} as const) 
export const setLoggedAC = (value: boolean) => ({ type: 'LOGIN/SET-LOGGED', value } as const)
export const setErrorAC = (error: string) => ({ type: 'LOGIN/SET-ERROR', error } as const)

//thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authApi.login(data)
        .then((res) => {
                dispatch(setLoggedAC(true))
            dispatch(setUserDataAC(res.data))
        })
        .catch((error) => {
            dispatch(setErrorAC(error.response.data.error))
        })

}