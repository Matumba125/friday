import { Dispatch } from "redux"
import { authApi } from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setLoggedAC, setUserDataAC } from "./loginizationReducer"




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