import { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {authApi, LoginParamsType} from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setUserDataAC } from "./profileReducer"


export const logOutTC = createAsyncThunk('login/logOut', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading({isLoading: true}))
        await authApi.logout()
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading:false}))
        dispatch(setLoggedAC({isLoggedIn: false}))
    }
})

export const loginTC = createAsyncThunk('login/logIn', async (data: LoginParamsType, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading({isLoading: true}))
        const res = await authApi.login(data)
        dispatch(setLoggedAC({isLoggedIn: true}))
        dispatch(setUserDataAC({userData: res.data}))
    } catch (error) {
        //@ts-ignore
        dispatch(setLoginErrorAC({error: error.response.data.error}))
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading:false}))
    }
})

const slice = createSlice({
    name: 'loginization',
    initialState: {
        isLoggedIn: false,
        error: '',
    },
    reducers:{
        setLoginErrorAC(state, action: PayloadAction<{error: string}>){
           state.error = action.payload.error
        },
        setLoggedAC(state, action: PayloadAction<{isLoggedIn: boolean}>){
            state.isLoggedIn = action.payload.isLoggedIn
        }
    },

})
export const loginizationReducer = slice.reducer

export const {setLoggedAC, setLoginErrorAC} = slice.actions