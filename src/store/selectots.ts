import { AppStateType } from "./store"


//// Registration Selectors

export const getRegistrationError = (store: AppStateType): string =>{
    return store.registration.error
}
export const getRegistrationStatus = (store: AppStateType): boolean =>{
    return store.registration.registered
}

//// App Selectors

export const getIsLoading = (state: AppStateType): boolean =>{
    return state.app.isLoading
}