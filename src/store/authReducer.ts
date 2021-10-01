import { Dispatch } from "redux"
import { authApi } from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setLoggedAC} from "./loginizationReducer"
import {setProfileIsEditingAC, setUserDataAC } from "./profileReducer"
import { AppStateType } from "./store"




////////////////////// Thunks

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

export const logOutTC = () =>(
    (dispatch: Dispatch)=>{
        dispatch(setIsLoading(true))
        authApi.logout()
            .then(()=>{
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC(false))
            })
            .catch((error) =>{
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC(false))
            })
    }
)


export const updateProfileTC = (name: string, avatar: string | undefined) =>(
    (dispatch: Dispatch, getState: AppStateType)=>{
        
        dispatch(setIsLoading(true))
        authApi.update({name, avatar})
            .then((res)=> {
                dispatch(setIsLoading(false))
                dispatch(setUserDataAC(res.data.updatedUser))
                dispatch(setProfileIsEditingAC(false))
            })
            .catch((error)=>{
                dispatch(setIsLoading(false))
            })
    }
)