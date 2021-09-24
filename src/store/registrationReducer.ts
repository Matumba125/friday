import {Dispatch} from "redux"
import {authApi, RegisterParamsType} from "../api/auth-api"
import { setIsLoading } from "./appReducer"


///Action Tyes
export type SetErrorActionType = {
    type: 'REG/ERROR',
    error: string
}

export type SetRegisteredActionType = {
    type: 'REG/SET-REGISTERED',
    registered: boolean
}

export type RegistrartionReducerActionTypes = SetErrorActionType | SetRegisteredActionType

type RegistrationInitialStateType = {
    error: string
    registered: boolean
}

const initialState = {
    error: '',
    registered: false
}


export const registrationReducer = (state: RegistrationInitialStateType = initialState, action: RegistrartionReducerActionTypes): RegistrationInitialStateType => {
    switch (action.type) {
        case "REG/ERROR":
            return {
                ...state,
                error: action.error
            }
        case "REG/SET-REGISTERED":
            return {
                ...state,
                registered: action.registered
            }
        default:
            return state
    }
}

/// Actions

export const setErrorAC = (error:string): SetErrorActionType => ({
    type: "REG/ERROR",
    error
} as const)

const setRegisteredAC = (registered: boolean): SetRegisteredActionType => ({
    type: 'REG/SET-REGISTERED',
    registered
} as const)


/// Thunks

export const registerTC = (regData: RegisterParamsType) => (
    (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        authApi.register(regData).then(() => {
            dispatch(setRegisteredAC(true))
            dispatch(setErrorAC(''))
            dispatch(setIsLoading(false))
        }).catch((error) => {
            // console.dir(error)
            dispatch(setErrorAC(error.response.data.error))
            dispatch(setIsLoading(false))
        })
    }
)