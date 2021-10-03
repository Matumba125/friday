import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {authApi, RegisterParamsType} from "../api/auth-api"
import {setIsLoading} from "./appReducer"


export const registerTC = createAsyncThunk('registration/register', async (regData: RegisterParamsType, {dispatch, rejectWithValue})=>{
    try{
        dispatch(setIsLoading({isLoading: true}))
        await authApi.register(regData)
        dispatch(setRegisteredAC({registered: true}))
        dispatch(setRegistrationErrorAC({error: ''}))
    }catch (error){
        //@ts-ignore
        dispatch(setRegistrationErrorAC({error: error.response.data.error}))
        return rejectWithValue(error)
    }finally {
        dispatch(setIsLoading({isLoading:false}))

    }
})


const slice = createSlice({
    name: 'registration',
    initialState:{
        error: '',
        registered: false
    },
    reducers:{
        setRegistrationErrorAC(state, action: PayloadAction<{error:string}>){
            state.error = action.payload.error
        },
        setRegisteredAC(state, action: PayloadAction<{registered: boolean}>){
            state.registered = action.payload.registered
        }
    }
})

export const registrationReducer = slice.reducer

export const {setRegistrationErrorAC, setRegisteredAC} = slice.actions