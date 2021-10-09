import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {cardsApi} from "../api/cardsAPI"
import {setIsLoading} from "./appReducer"
import {AppStateType} from "./store"

export type CardsControlsType = {
    cardQuestion?: string
    cardAnswer?: string
    sortCards?: number
    page: number
    pageCount: number
    totalPagesCount: number
}

export type CardType = {
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

type CardsInitialStateType = {
    cards: CardType[]
    controls: CardsControlsType
    packUserId: string
    currentPackId: string
}

const initialState: CardsInitialStateType = {
    cards: [],
    controls: {
        sortCards: 0,
        page: 1,
        pageCount: 10,
        totalPagesCount: 0
    },
    packUserId: '',
    currentPackId:'',
}

export const getCards = createAsyncThunk('cards/getCards', async (cardsPack_id: string, {
    dispatch,
    rejectWithValue,
    getState
}) => {
    const state = getState() as AppStateType
    const controls = state.cards.controls
    try {
        dispatch(setIsLoading({isLoading: true}))
        const res = await cardsApi.getCard({controls, cardsPack_id})
        return {cardsData: res.data}
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading: false}))
    }
})
export const createCard = createAsyncThunk('cards/createCard', async (params:{question: string, answer: string}, {
    dispatch,
    rejectWithValue,
    getState
}) => {
    const state = getState() as AppStateType
    const cardsPack_id = state.cards.currentPackId
    try {
        dispatch(setIsLoading({isLoading: true}))
        await cardsApi.createCard({cardsPack_id: cardsPack_id, answer: params.answer, question: params.question})
        dispatch(getCards(cardsPack_id))
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading: false}))
    }
})
export const deleteCard = createAsyncThunk('cards/deleteCard', async (cardId: string, {
    dispatch,
    rejectWithValue,
    getState
}) => {
    const state = getState() as AppStateType
    const cardsPack_id = state.cards.currentPackId
    try {
        dispatch(setIsLoading({isLoading: true}))
        await cardsApi.deleteCard(cardId)
        dispatch(getCards(cardsPack_id))
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading: false}))
    }
})

const slice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        setCurrentPackId(state, action: PayloadAction<{currentPackId: string}>){
            state.currentPackId = action.payload.currentPackId
        },
        setCurrentCardsPage(state, action: PayloadAction<{currentPage: number}>){
            state.controls.page = action.payload.currentPage
        },
        setCardsPageCount(state, action: PayloadAction<{pageCount: number}>){
            state.controls.pageCount = action.payload.pageCount
        },
    },
    extraReducers: builder => {
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload.cardsData.cards
            state.packUserId = action.payload.cardsData.packUserId
            state.controls.totalPagesCount = Math.ceil(action.payload.cardsData.cardsTotalCount/state.controls.pageCount)
        })
    }
})

export const cardsReducer = slice.reducer

export const {setCurrentPackId, setCurrentCardsPage, setCardsPageCount} =slice.actions