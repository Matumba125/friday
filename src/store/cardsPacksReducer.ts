import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "redux"
import {cardsApi} from "../api/cardsPackAPI"
import store, { AppStateType } from "./store"

export type CardPacksType ={
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



type ControlsType = {
    packName: string | undefined
    min: number 
    max: number
    sortPacks: 0 | 1
    page: number
    pageCount: number
    isPrivate: boolean
}

type CardsPackInitialStateType ={
    cardPacks: CardPacksType[]
    controls: ControlsType
    currentPage: number
    totalCount: number
    page: number
    pageCount: number
}

const initialState: CardsPackInitialStateType ={
    cardPacks: [],
    controls: {
        packName: undefined,
        min: 1,
        max: 100,
        sortPacks: 0,
        page: 1,
        pageCount: 20,
        isPrivate: false
    }
}

const slice = createSlice({
    name: 'cards-packs',
    initialState: initialState,
    reducers:{
        setPageAC(state, action:PayloadAction<{ page: number }>){
            state.controls.page = action.payload.page
        },
        setMinCardsAC(state, action:PayloadAction<{ min: number }>){
            state.controls.min = action.payload.min
        },
        setMaxCardsAC(state, action:PayloadAction<{ max: number }>){
            state.controls.max = action.payload.max
        },
        setPageCountAC(state, action:PayloadAction<{ pageCount: number }>){
            state.controls.pageCount = action.payload.pageCount
        },
        setPackNameAC(state, action:PayloadAction<{ packName: string }>){
            state.controls.packName = action.payload.packName
        },
        setSortPacksAC(state, action:PayloadAction<{ sortPacks: 0 | 1 }>){
            state.controls.sortPacks = action.payload.sortPacks
        },
        setIsPrivateAC(state, action:PayloadAction<{ isPrivate: boolean }>){
            state.controls.isPrivate = action.payload.isPrivate
        },
        setCardsPacks(state, action:PayloadAction<{ cardPacks: CardPacksType[]}>){
            state.cardPacks = action.payload.cardPacks
        }
        
    }
})

export const cardsPacksReducer = slice.reducer

export const {setCardsPacks, setIsPrivateAC, setMaxCardsAC, setMinCardsAC, setPackNameAC, setPageAC, setPageCountAC, setSortPacksAC} = slice.actions

export const findPacksNameAC = (packName: string | undefined) => ({ type: 'CARD/FIND-CARDS-PACK-NAME', packName } as const)
export const findUserNameAC = (userName: string) => ({ type: 'CARD/FIND-CARDS-USER-NAME', userName } as const)


export const getCardsPacksTC = () =>(
    // @ts-ignore
    (dispatch: Dispatch, getState: ()=> store)=>{
        let controls: ControlsType = getState().cardsPack.controls
        let urlWithParams = `/?${controls.packName ?`packName=${controls.packName}` : ''}${controls.min ? `&min=${controls.min}`: ''}${controls.max ? `&max=${controls.max}` : ''}${controls.sortPacks ? `&sortPacks=${controls.sortPacks}updated` : ''}${controls.page ? `&page=${controls.page}` : ''}${controls.pageCount ? `&pageCount=${controls.pageCount}` : ''}${controls.isPrivate ? `&user_id=${getState().profile.userData._id}` : ''}`
        
        cardsApi.getPack(urlWithParams)
            .then((res)=>{
                dispatch(setCardsPacks({cardPacks: res.data.cardPacks}))
            })
    }
)

export const changePageCardTC = (page: number, pageCount: number) => (dispatch: Dispatch) => {

    cardsPackAPI.getCardsPack(page, pageCount)
        .then((res) => {
            dispatch(setCurrentPage(page))
            dispatch(setCardsPacksSize(pageCount))
            dispatch(setCardsPackAC(res.data.cardPacks))
            dispatch(setCardsPacksCount(res.data.cardPacksTotalCount))
        })

}


