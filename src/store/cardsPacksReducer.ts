import { Dispatch } from "redux"
import { CardPacksType, cardsPackAPI } from "../api/cardsPackAPI"
import { AppStateType } from "./store"

export type CardsType = {
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
}



type ControlsType = {
    packName: string | undefined
    min: number
    max: number
    sortPacks: number
    page: number
    pageCount: number
}

type CardsPacksReducerType = ReturnType<typeof findPacksNameAC>
    | ReturnType<typeof findUserNameAC>
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setCardsPacksCount>
    | ReturnType<typeof setCardsPacksSize>

export type CardsPackInitialStateType = {
    cards: CardPacksType[]
    controls: ControlsType
    currentPage: number
    totalCount: number
    page: number
    perPage: number
}


const initialState = {
    cards: [],
    controls: {
        packName: undefined,
        min: 1,
        max: 100,
        sortPacks: 0,
        page: 1,
        pageCount: 20,
    },
    currentPage: 1,
    totalCount: 0,
    page: 0,
    perPage: 10
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
            return { ...state }
        default: {
            return state
        }
    }
}

export const setCardsPackAC = (payload: CardPacksType[]) => ({ type: 'SET-PACKS-CARDS', payload } as const)
export const setCardsPacksSize = (packsSize: number) => ({ type: 'SET-CARDS-PACKS-SIZE', packsSize} as const)
export const setCurrentPage = (page: number) => ({ type: 'SET-CURRENT-PAGE', page } as const)
export const setCardsPacksCount = (totalCount: number) => ({ type: 'SET-CARDS-PACKS-COUNT', totalCount } as const)

export const findPacksNameAC = (packName: string | undefined) => ({ type: 'CARD/FIND-CARDS-PACK-NAME', packName } as const)
export const findUserNameAC = (userName: string) => ({ type: 'CARD/FIND-CARDS-USER-NAME', userName } as const)


export const getCardsPacksTC = (isPrivate?: boolean) => (

    (dispatch: Dispatch, getState: () => AppStateType) => {
        let controls: ControlsType = getState().cardsPack.controls
        let urlWithParams = `/?${controls.packName ? `packName=${controls.packName}` : ''}${controls.min ? `&min=${controls.min}` : ''}${controls.max ? `&max=${controls.max}` : ''}${controls.sortPacks ? `&sortPacks=${controls.sortPacks}updated` : ''}${controls.page ? `&page=${controls.page}` : ''}${controls.pageCount ? `&pageCount=${controls.pageCount}` : ''}${isPrivate ? `&user_id=${getState().profile.userData._id}` : ''}`

        cardsPackAPI.get(urlWithParams)
            .then((res) => {
                console.log(res.data);
                // dispatch(setCardsPackAC(res.data.cardPacks))
            })
    }
)

export const changePageCardTC = (page: number, pageCount: number) => (dispatch: Dispatch) => {

    cardsPackAPI.getCardsPack(page, pageCount)
        .then((res) => {
            dispatch(setCurrentPage(page))
            dispatch(setCardsPackAC(res.data.cardPacks))
            dispatch(setCardsPacksCount(res.data.cardPacksTotalCount))
        })

}


