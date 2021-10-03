import { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {authApi, LoginParamsType} from "../api/auth-api"
import { setIsLoading } from "./appReducer"
import { setUserDataAC } from "./profileReducer"


export const logOutTC_ = createAsyncThunk('login/logOut', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading(true))
        await authApi.logout()
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading(false))
        dispatch(setLoggedAC({isLoggedIn: false}))
    }
})

export const loginTC_ = createAsyncThunk('login/logIn', async (data: LoginParamsType, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading(true))
        const res = await authApi.login(data)
        dispatch(setLoggedAC({isLoggedIn: true}))
        dispatch(setUserDataAC({userData: res.data}))
    } catch (error) {
        //@ts-ignore
        dispatch(setLoginErrorAC({error: error.response.data.error}))
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading(false))
    }
})

export const loginTC = (data: LoginParamsType) =>(
    (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        authApi.login(data)
            .then((res) => {
                dispatch(setIsLoading(false))
                dispatch(setLoggedAC({isLoggedIn: true}))
                dispatch(setUserDataAC({userData: res.data}))
            })
            .catch((error) => {
                dispatch(setIsLoading(false))
                dispatch(setLoginErrorAC(error.response.data.error))
            })

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
//action

export const {setLoggedAC, setLoginErrorAC} = slice.actions