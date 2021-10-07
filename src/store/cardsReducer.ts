import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { cardsApi } from "../api/cardsAPI"
import { setIsLoading } from "./appReducer"
import { AppStateType } from "./store"

export type CardsControlsType = {
    cardQuestion?: string
    cardAnswer?: string
    sortCards?: number
    page?: number
    pageCount?: number
    totalPagesCount?: number
}

export type CardType ={
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    _id: string
}

type CardsInitialStateType ={
    cards: CardType[]
    controls: CardsControlsType
}

const initialState: CardsInitialStateType ={
    cards: [],
    controls: {
        sortCards: 0,
        page: 1,
        pageCount: 10,
        totalPagesCount: 0
    },
}

export const getCards = createAsyncThunk('cards/getCards', async (cardsPack_id: string, {dispatch, rejectWithValue, getState})=>{
    const state = getState() as AppStateType
    const controls = state.cards.controls
    try {
        dispatch(setIsLoading({isLoading: true}))
        const res = await cardsApi.getCard({controls, cardsPack_id})
        return {cards: res.data.cards}
    }catch (error) {
        return rejectWithValue(error)
    }finally {
        dispatch(setIsLoading({isLoading:false}))
    }
})

const slice = createSlice({
    name:'cards',
    initialState: initialState,
    reducers:{

    },
    extraReducers: builder =>{
        builder.addCase(getCards.fulfilled, (state, action)=>{
            state.cards = action.payload.cards
        })
    }
})

export const cardsReducer = slice.reducer