import { CardPacksType } from "../store/cardsPacksReducer"
import {instance} from "./api"



export const cardsApi = {
    getPack(data: string) {
        return instance.get<cardsPackDataType>(`/cards/pack${data}`)
    },

    postPack(data: postPackParamsType) {
        return instance.post<{}>(`/cards/pack`, {data})
},

    deletePack(data: deleteCardsParamsType) {
        return instance.delete<{}>(`/cards/pack`, {data})
    },

    putPack(data: putPackParamsType) {
        return instance.put<{}>(`/cards/pack`, {data})
    },

    getCard(data: getCardParamsType) {
        return instance.get<getCardDataType>(`/cards/card`, {data})
    },

    postCard(data: postCardParamsType) {
        return instance.post<{}>(`/cards/card`, {data})
    },

    deleteCard(data: deleteCardsParamsType) {
        return instance.post<{}>(`/cards/card`, {data})
    },

    putCard(data: putCardParamsType) {
        return instance.post<{}>(`/cards/card`, {data})
    },

}

export type cardsPackDataType = {
    cardPacks: CardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type postPackParamsType = {
    cardsPack: {
        name: string
        path: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private: false
        type: string
    }
}

export type deleteCardsParamsType = {
    id: string
}

export type putPackParamsType = {
    cardsPack: {
        _id: string
        name?: string
    }
}

export type getCardParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type getCardDataType = {
    cards: [
        {
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
            __v: number
            _id: string
        },
    ]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type postCardParamsType = {
    card: {
        cardsPack_id: string
        question: string
        answer: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type: string
    }
}

export type putCardParamsType = {
    card: {
        _id: string
        question?: string
        comments?: string
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