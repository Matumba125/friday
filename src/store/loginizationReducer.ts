import {Dispatch} from "redux"
import {authApi, LoginParamsType, UserDataType} from "../api/auth-api"
import { setIsLoading } from "./appReducer"


const inititialState = {
    isLoggedIn: false,
    error: '',
    userData: {
        _id: '',
        email: '',
        name: '',
        publicCardPacksCount: 0, 

        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, 
        rememberMe: false,
        
        
    }
}
type LoginizationReducerInititialStateType = typeof inititialState

type LoginizationReducerActionType = ReturnType<typeof setLoggedAC>
    | ReturnType<typeof setLoginErrorAC>
    | ReturnType<typeof setUserDataAC>

export const loginizationReducer = (state: LoginizationReducerInititialStateType = inititialState, action: LoginizationReducerActionType): LoginizationReducerInititialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-ERROR':
            return {...state, error: action.error}
        case 'LOGIN/SET-LOGGED':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'LOGIN/SET-USER-DATA':
            return {...state, userData: action.data}
    }
    return state;
}

//action
export const setUserDataAC = (data: UserDataType) => ({type: 'LOGIN/SET-USER-DATA', data} as const)
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


//////////////////////// AUTH ME

export const authMeTC = ()=>(
    (dispatch: Dispatch)=>{
        dispatch(setIsLoading(true))
        authApi.me()
            .then((res)=>{
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC(true))
                dispatch(setUserDataAC(res.data))
            })
            .catch((error)=>{
                dispatch(setIsLoading(false))
            })
    }
)