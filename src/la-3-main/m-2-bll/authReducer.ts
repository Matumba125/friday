import {createAsyncThunk} from "@reduxjs/toolkit"
import {setIsLoading} from "./appReducer"
import {setLoggedAC} from "../../store/loginizationReducer"
import { setUserDataAC } from "../../store/profileReducer"
import { authApi } from "../m-3-dal/auth-api"

export const authMeTC = createAsyncThunk('auth/authMe', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading({isLoading: true}))
        const res = await authApi.me()
        dispatch(setLoggedAC({isLoggedIn: true}))
        dispatch(setUserDataAC({userData: res.data}))
    } catch (error) {
        dispatch(setLoggedAC({isLoggedIn: false}))
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading:false}))
    }
})
