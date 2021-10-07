import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppStateType } from "./store"

const initialState ={
    cards: [],
    controls: {
        cardName: undefined,
        sortCards: 0,
        page: 1,
        pageCount: 10,
        totalPagesCount: 0
    }
}

const getCards = createAsyncThunk('cards/getCards', async (cardPAckId: string, {dispatch, rejectWithValue, getState})=>{
    const state = getState() as AppStateType
    const controls = state.cards.controls
})

const slice = createSlice({
    name:'cards',
    initialState: initialState,
    reducers:{

    }
})

export const cardsReducer = slice.reducer