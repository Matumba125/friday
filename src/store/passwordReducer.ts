import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
type SetPasswordSettedActionType = {
    type: 'PASS/PASSWORD-SETTED',
    passwordSetted: boolean
}

type PasswordReducerActionType = SetSendActionType | SetPasswordRecoveryErrorActionType | SetPasswordSettedActionType

type PasswordReducerInitialStateType = {
    isSended: boolean
    error: string
    passwordSetted: boolean
}

const initialState = {
    isSended: false,
    error: '',
    passwordSetted: false,
}

const slice = createSlice({
    name: 'password',
    initialState:{
        isSended: false,
        error: '',
        passwordSetted: false,
    },
     reducers:{

     }
})

export const sendRecoveryMailTC = createAsyncThunk('password/sendRecoveryMail', async (email: string, {dispatch, rejectWithValue}) => {
    const forgotData: ForgotParamsType ={
        email: email,
        from: "test-front-admin <lonely__wind@mail.ru>",
        message: `<div style="padding: 15px">
                    Password recovery link:
                    <a href='https://matumba125.github.io/friday/#/new-password/$token$'>Click Here</a>
                    </div>`
    }

    try {
        dispatch(setIsLoading({isLoading: true}))
        await authApi.forgot(forgotData)
        dispatch(setSendedAC(true))
    }catch (error) {
        //@ts-ignore
        dispatch(setPasswordRecoveryErrorAC(error.response.data.error))
    }finally{
        dispatch(setIsLoading({isLoading:false}))
    }
})

export const setNewPasswordTC = createAsyncThunk('profile/updateProfile', async (param:{password: string, token: string}, {dispatch, rejectWithValue, getState}) => {
    try {
        dispatch(setIsLoading({isLoading: true}))
        await authApi.setNewPassword({password: param.password, resetPasswordToken: param.token})
        dispatch(setPasswordSettedAC(true))
    }catch (error){
        //@ts-ignore
        dispatch(setPasswordRecoveryErrorAC(error.response.data.error))
    }finally {
        dispatch(setIsLoading({isLoading:false}))
    }
})

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
        case "PASS/PASSWORD-SETTED":
            return {
                ...state,
                passwordSetted: action.passwordSetted
            }
        default:
            return state
    }
}

//// Actions
export const setSendedAC = (isSended: boolean): SetSendActionType=>({
    type: "PASS/SET-IS-SENDED",
    isSended
})


export const setPasswordRecoveryErrorAC = (error: string): SetPasswordRecoveryErrorActionType =>({
    type: "PASS/SET-ERROR",
    error
})

export const setPasswordSettedAC = (passwordSetted: boolean): SetPasswordSettedActionType =>({
    type: "PASS/PASSWORD-SETTED",
    passwordSetted
})


//// Thunks
