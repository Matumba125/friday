import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "redux"
import { CardPacksType, cardsPackAPI } from "../api/cardsPackAPI"
import { AppStateType } from "./store"

<<<<<<< HEAD
export type CardsType = {
=======
export type CardPacksType ={
>>>>>>> origin/master
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

<<<<<<< HEAD
type CardsPacksReducerType = ReturnType<typeof findPacksNameAC>
    | ReturnType<typeof findUserNameAC>
    | ReturnType<typeof setCardsPackAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setCardsPacksCount>
    | ReturnType<typeof setCardsPacksSize>

export type CardsPackInitialStateType = {
    cards: CardPacksType[]
=======
type CardsPackInitialStateType ={
    cardPacks: CardPacksType[]
>>>>>>> origin/master
    controls: ControlsType
    currentPage: number
    totalCount: number
    page: number
    pageCount: number
}

<<<<<<< HEAD

const initialState = {
    cards: [],
=======
const initialState: CardsPackInitialStateType ={
    cardPacks: [],
>>>>>>> origin/master
    controls: {
        packName: undefined,
        min: 1,
        max: 100,
        sortPacks: 0,
        page: 1,
        pageCount: 20,
<<<<<<< HEAD
    },
    currentPage: 1,
    totalCount: 0,
    page: 0,
    pageCount: 10
}

export const cardsPacksReducer = (state: CardsPackInitialStateType = initialState, action: CardsPacksReducerType): CardsPackInitialStateType => {
    switch (action.type) {
        case 'CARD/FIND-CARDS-PACK-NAME': {
            const value = action.packName;
            if (value) {
                const find = state.cards.filter(card => card.name.includes(value))
                return { ...state, cards: find }
            }
            return { ...state }
        }
        case 'CARD/FIND-CARDS-USER-NAME': {
            const value = action.userName;
            if (value) {
                const find = state.cards.filter(card => card.user_name.includes(value))
                return { ...state, cards: find }
            }
            return { ...state }
        }
        case 'SET-PACKS-CARDS':
            return {
                ...state,
                cards: action.payload
            }
        case 'SET-CURRENT-PAGE':
            return { ...state, currentPage: action.page }

        case 'SET-CARDS-PACKS-COUNT':
            return { ...state, totalCount: action.totalCount }
        case 'SET-CARDS-PACKS-SIZE':
            return { ...state, pageCount: action.pageCount }
        default: {
            return state
        }
    }
}

export const setCardsPackAC = (payload: CardPacksType[]) => ({ type: 'SET-PACKS-CARDS', payload } as const)
export const setCardsPacksSize = (pageCount: number) => ({ type: 'SET-CARDS-PACKS-SIZE', pageCount} as const)
export const setCurrentPage = (page: number) => ({ type: 'SET-CURRENT-PAGE', page } as const)
export const setCardsPacksCount = (totalCount: number) => ({ type: 'SET-CARDS-PACKS-COUNT', totalCount } as const)
=======
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
>>>>>>> origin/master

export const findPacksNameAC = (packName: string | undefined) => ({ type: 'CARD/FIND-CARDS-PACK-NAME', packName } as const)
export const findUserNameAC = (userName: string) => ({ type: 'CARD/FIND-CARDS-USER-NAME', userName } as const)


<<<<<<< HEAD
export const getCardsPacksTC = (isPrivate?: boolean) => (

    (dispatch: Dispatch, getState: () => AppStateType) => {
        let controls: ControlsType = getState().cardsPack.controls
        let urlWithParams = `/?${controls.packName ? `packName=${controls.packName}` : ''}${controls.min ? `&min=${controls.min}` : ''}${controls.max ? `&max=${controls.max}` : ''}${controls.sortPacks ? `&sortPacks=${controls.sortPacks}updated` : ''}${controls.page ? `&page=${controls.page}` : ''}${controls.pageCount ? `&pageCount=${controls.pageCount}` : ''}${isPrivate ? `&user_id=${getState().profile.userData._id}` : ''}`

        cardsPackAPI.get(urlWithParams)
            .then((res) => {
                console.log(res.data);
                // dispatch(setCardsPackAC(res.data.cardPacks))
=======
export const getCardsPacksTC = () =>(
    // @ts-ignore
    (dispatch: Dispatch, getState: ()=> store)=>{
        let controls: ControlsType = getState().cardsPack.controls
        let urlWithParams = `/?${controls.packName ?`packName=${controls.packName}` : ''}${controls.min ? `&min=${controls.min}`: ''}${controls.max ? `&max=${controls.max}` : ''}${controls.sortPacks ? `&sortPacks=${controls.sortPacks}updated` : ''}${controls.page ? `&page=${controls.page}` : ''}${controls.pageCount ? `&pageCount=${controls.pageCount}` : ''}${controls.isPrivate ? `&user_id=${getState().profile.userData._id}` : ''}`
        
        cardsPackAPI.get(urlWithParams)
            .then((res)=>{
                dispatch(setCardsPacks({cardPacks: res.data.cardPacks}))
>>>>>>> origin/master
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


