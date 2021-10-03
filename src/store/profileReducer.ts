import { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import {authApi, UserDataType } from "../api/auth-api"
import { setIsLoading } from "./appReducer"


export const updateProfileTC_ = createAsyncThunk('profile/updateProfile', async (param:{name: string, avatar: string | undefined}, {dispatch, rejectWithValue, getState}) => {
    try {
        dispatch(setIsLoading(true))
        const res = await authApi.update({name: param.name, avatar: param.avatar})
        return {userData: res.data.updatedUser}
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading(false))
        dispatch(setProfileIsEditingAC({isEditing: false}))
    }
})


const initialState: ProfileReducerInitialStateType = {
    userData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,

        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,


    },
    isEditing: false,
}

type ProfileReducerInitialStateType = {
    userData: UserDataType,
    isEditing: boolean
}

const slice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers:{
        setUserDataAC(state, action: PayloadAction<{userData: UserDataType}>){
            state.userData = action.payload.userData
        },
        setProfileIsEditingAC(state, action: PayloadAction<{isEditing: boolean}>){
            state.isEditing = action.payload.isEditing
        },
    }
})


export const profileReducer = slice.reducer

export const {setUserDataAC, setProfileIsEditingAC} = slice.actions
