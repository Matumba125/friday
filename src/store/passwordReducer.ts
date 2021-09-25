import { Dispatch } from "redux"
import {authApi, ForgotParamsType } from "../api/auth-api"
import { setIsLoading } from "./appReducer"

type SetSendActionType = {
    type: 'PASS/SET-IS-SENDED',
    isSended: boolean
}

type SetPasswordRecoveryErrorActionType = {
    type: 'PASS/SET-ERROR',
    error: string
}

type PasswordReducerActionType = SetSendActionType | SetPasswordRecoveryErrorActionType

type PasswordReducerInitialStateType = {
    isSended: boolean
    error: string
}

const initialState = {
    isSended: false,
    error: '',
}

export const passwordReducer = (state: PasswordReducerInitialStateType = initialState, action: PasswordReducerActionType): PasswordReducerInitialStateType =>{
    switch (action.type){
        case "PASS/SET-IS-SENDED":
            return {
                ...state,
                isSended: action.isSended
            }
        case "PASS/SET-ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

//// Actions
export const setSendedAC = (isSended: boolean): SetSendActionType=>({
    type: "PASS/SET-IS-SENDED",
    isSended
} as const)

export const setPasswordRecoveryErrorAC = (error: string): SetPasswordRecoveryErrorActionType =>({
    type: "PASS/SET-ERROR",
    error
})


//// Thunks

export const sendRecoveryMailTC = (email: string) =>(
 (dispatch: Dispatch) =>{
     dispatch(setIsLoading(true))
     const forgotData: ForgotParamsType ={
        email: email,
        from: "test-front-admin <lonely__wind@mail.ru>",
        message: `<div style="padding: 15px">
                    Password recovery link:
                    <a href='https://matumba125.github.io/friday/#/new-password/$token$'>Click Here</a>
                    </div>`
    }
    authApi.forgot(forgotData)
        .then(()=>{
            dispatch(setIsLoading(false))
            dispatch(setSendedAC(true))
        }).catch((err)=>{
            dispatch(setIsLoading(false))
            dispatch(setSendedAC(false))
            dispatch(setPasswordRecoveryErrorAC(err.response.data.error))
    })
 }
)