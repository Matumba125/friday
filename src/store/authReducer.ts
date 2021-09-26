import { Dispatch } from "redux"
import { authApi } from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setLoggedAC} from "./loginizationReducer"
import { setUserDataAC } from "./profileReducer"
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
            })
    }
)


export const updateProfileTC = (gainedName?: string, gainedAvatar?: string) =>(
    (dispatch: Dispatch, getState: AppStateType)=>{

        let name = gainedName ? gainedName : getState.profile.userData.name
        let avatar = gainedAvatar ? gainedAvatar : getState.profile.userData.avatar

        dispatch(setIsLoading(true))
        authApi.update({name: name, avatar: avatar})
            .then((res)=> {
                dispatch(setIsLoading(false))
                dispatch(setUserDataAC(res.data))
            })
            .catch((error)=>{
                dispatch(setIsLoading(false))
            })
    }
)