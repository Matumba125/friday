import { instance } from "./auth-api"


export const cardsPackAPI = {
    get: (urlParams: string) => {
        return instance.get('cards/pack' + urlParams)
    }
}