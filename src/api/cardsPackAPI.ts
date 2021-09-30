import { instance } from "./auth-api"


export const cardsPackAPI = {
    get: (urlParams: string) => {
        return instance.get<ResponceType>('cards/pack' + urlParams)
    },
    getCardsPack: (page: number, pageCount: number) => {
        return instance.get<ResponceType>(`cards/pack?page=${page}&pageCount=${pageCount}`)
    }
}

export type CardPacksType = {
    _id: string
    user_id: string
    user_name: string
    name: string
    cardsCount: number
    created: string
    updated: string
}

export type ResponceType = {
    cardPacks: CardPacksType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}