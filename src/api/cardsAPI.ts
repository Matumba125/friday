import {CardPacksType, ControlsType} from "../store/cardsPacksReducer"
import {CardsControlsType, CardType} from "../store/cardsReducer"
import {instance} from "./api"


export const cardsApi = {
    getPack(data: GetPacksParamsType) {
        return instance.get<cardsPackDataType>(`/cards/pack`,
            {
                params: {
                    packName: data.controls.packName,
                    min: data.controls.min,
                    max: data.controls.max,
                    sortPacks: data.controls.sortPacks,
                    page: data.controls.page,
                    pageCount: data.controls.pageCount,
                    user_id: data.user_id ? data.user_id : '',
                }
            }
        )
    },

    createPack(data: postPackParamsType) {
        return instance.post<{}>(`/cards/pack`, data)
    },

    deletePack(packId: string) {
        return instance.delete<{}>(`/cards/pack`, {
            params: {
                id: packId
            }
        })
    },

    updatePack(data: putPackParamsType) {
        return instance.put<{}>(`/cards/pack`, data)
    },

    getCard(data: GetCardsParamsType) {
        return instance.get<getCardDataType>(`/cards/card`,
            {
                params: {
                    cardQuestion: data.controls.cardQuestion,
                    cardAnswer: data.controls.cardAnswer,
                    page: data.controls.page,
                    sortCards: data.controls.sortCards,
                    pageCount: data.controls.pageCount,
                    cardsPack_id: data.cardsPack_id,
                }
            })
    },

    postCard(data: postCardParamsType) {
        return instance.post<{}>(`/cards/card`, {data})
    },

    deleteCard() {
        return instance.post<{}>(`/cards/card`,)
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

export type GetPacksParamsType = {
    controls: ControlsType
    user_id: string | undefined
}
export type GetCardsParamsType = {
    controls: CardsControlsType
    cardsPack_id: string
}

export type postPackParamsType = {
    cardsPack: {
        name: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: boolean
        type?: string
    }
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
    cards: CardType[]
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