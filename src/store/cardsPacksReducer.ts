import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {cardsApi} from "../api/cardsAPI"
import {setIsLoading} from "./appReducer"
import {AppStateType} from "./store"

export type CardPacksType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: Date
    updated: Date
    user_name: string
    more_id: string
}

export type ControlsType = {
    packName: string | undefined
    min: number
    max: number
    sortPacks: 0 | 1
    page: number
    pageCount: number
    isPrivate: boolean
    totalPagesCount: number
}

type CardsPackInitialStateType = {
    cardPacks: CardPacksType[]
    controls: ControlsType
}

const initialState: CardsPackInitialStateType = {
    cardPacks: [],
    controls: {
        packName: undefined,
        min: 1,
        max: 100,
        sortPacks: 0,
        page: 1,
        pageCount: 10,
        isPrivate: false,
        totalPagesCount: 0
    }
}

const slice = createSlice({
    name: 'cards-packs',
    initialState: initialState,
    reducers: {
        setPageAC(state, action: PayloadAction<{ page: number }>) {
            if (state.controls.page !== action.payload.page) state.controls.page = action.payload.page
        },
        setMinMaxCardsAC(state, action: PayloadAction<{ min: number, max: number }>) {
            state.controls.min = action.payload.min
            state.controls.max = action.payload.max
        },
        setPageCountAC(state, action: PayloadAction<{ pageCount: number }>) {
            state.controls.pageCount = action.payload.pageCount
        },
        setPackNameAC(state, action: PayloadAction<{ packName: string }>) {
            state.controls.packName = action.payload.packName
        },
        setSortPacksAC(state, action: PayloadAction<{ sortPacks: 0 | 1 }>) {
            state.controls.sortPacks = action.payload.sortPacks
        },
        setIsPrivateAC(state, action: PayloadAction<{ isPrivate: boolean }>) {
            state.controls.isPrivate = action.payload.isPrivate
        },
        setCardsPacks(state, action: PayloadAction<{ cardPacks: CardPacksType[] }>) {
            state.cardPacks = [...action.payload.cardPacks]
        },
        setTotalPagesCountAC(state, action: PayloadAction<{ pageCount: number, cardPacksTotalCount: number }>) {
            state.controls.totalPagesCount = Math.ceil(action.payload.cardPacksTotalCount / action.payload.pageCount)
        }

    }
})

export const cardsPacksReducer = slice.reducer

export const {
    setCardsPacks,
    setIsPrivateAC,
    setMinMaxCardsAC,
    setPackNameAC,
    setPageAC,
    setPageCountAC,
    setSortPacksAC,
    setTotalPagesCountAC
} = slice.actions


export const getCardsPacksTC = () => (
    (dispatch: Dispatch, getState: () => AppStateType) => {
        let controls: ControlsType = getState().cardsPack.controls
        const user_id = controls.isPrivate ? getState().profile.userData._id : undefined
        dispatch(setIsLoading(true))
        cardsApi.getPack({controls: controls, user_id: user_id})
            .then((res) => {
                dispatch(setIsLoading(false))
                dispatch(setCardsPacks({cardPacks: res.data.cardPacks}))
                dispatch(setTotalPagesCountAC({
                    pageCount: res.data.pageCount,
                    cardPacksTotalCount: res.data.cardPacksTotalCount
                }))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
            })
    }
)