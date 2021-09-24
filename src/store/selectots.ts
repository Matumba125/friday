import { AppStateType } from "./store"


export const getRegistrationError = (store: AppStateType): string | undefined =>{
    return store.registration.error
}
export const getRegistrationStatus = (store: AppStateType): boolean | undefined =>{
    return store.registration.registered
}