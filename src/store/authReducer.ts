import {createAsyncThunk} from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {authApi} from "../api/auth-api"
import {setIsLoading} from "./appReducer"
import {setLoggedAC} from "./loginizationReducer"
import {setProfileIsEditingAC, setUserDataAC} from "./profileReducer"
import {AppStateType} from "./store"

export const authMeTC_ = createAsyncThunk('auth/authMe', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading(true))
        const res = await authApi.me()
        dispatch(setLoggedAC({isLoggedIn: true}))
        return {userData: res.data}
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading(false))
    }
})



export const updateProfileTC = (name: string, avatar: string | undefined) => (
    (dispatch: Dispatch, getState: AppStateType) => {

        dispatch(setIsLoading(true))
        authApi.update({name, avatar})
            .then((res) => {
                dispatch(setIsLoading(false))
                dispatch(setUserDataAC({userData: res.data.updatedUser}))
                dispatch(setProfileIsEditingAC({isEditing: false}))
            })
            .catch((error) => {
                dispatch(setIsLoading(false))
            })
    }
)

export const logOutTC = () => (
    (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        authApi.logout()
            .then(() => {
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC({isLoggedIn: false}))
            })
            .catch((error) => {
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC({isLoggedIn: false}))
            })
    }
)

////////////////////// Thunks


export const authMeTC = () => (
    (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        authApi.me()
            .then((res) => {
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC({isLoggedIn: false}))
                dispatch(setUserDataAC({userData: res.data}))
            })
            .catch((error) => {
                dispatch(setIsLoading(false))
            })
    }
)
