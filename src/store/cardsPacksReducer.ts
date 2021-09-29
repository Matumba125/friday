import { Dispatch } from "redux"
import { cardsPackAPI } from "../api/cardsPackAPI"
import store from "./store"

type CardsType = {
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

type CardsPacksReducerType = ReturnType<typeof findPacksAC>

type CardsPackInitialStateType = {
    cards: CardsType[]
    controls: ControlsType
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
    }
}

export const cardsPacksReducer = (state: CardsPackInitialStateType = initialState, action: CardsPacksReducerType) => {
    switch (action.type) {
        case 'CARD/FIND-CARDS-PACK':{
            const value = action.payload.packName;
            //@ts-ignore
            const find = state.cards.filter(card => card.name.includes(value))
            return {...state, find}
        }      
    }
    return state
}

export const findPacksAC = (packName?: string | undefined, userName?: string) => ({ type: 'CARD/FIND-CARDS-PACK', payload: { packName, userName } } as const)




export const getCardsPacksTC = (isPrivate?: boolean) => (
    // @ts-ignore
    (dispatch: Dispatch, getState: () => store) => {
        let controls: ControlsType = getState().cardsPack.controls
        let urlWithParams = `/?${controls.packName ? `packName=${controls.packName}` : ''}${controls.min ? `&min=${controls.min}` : ''}${controls.max ? `&max=${controls.max}` : ''}${controls.sortPacks ? `&sortPacks=${controls.sortPacks}updated` : ''}${controls.page ? `&page=${controls.page}` : ''}${controls.pageCount ? `&pageCount=${controls.pageCount}` : ''}${isPrivate ? `&user_id=${getState().profile.userData._id}` : ''}`

        cardsPackAPI.get(urlWithParams)
            .then((res) => {
                console.log(res)
            })
    }
)

export const getFilterCardsPackTC = (packName?: string | undefined, userName?: string) =>(dispatch: Dispatch) => {}
