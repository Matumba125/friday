import { AppStateType } from "./store"


//// Registration Selectors

export const getRegistrationError = (state: AppStateType): string =>{
    return state.registration.error
}
export const getRegistrationStatus = (state: AppStateType): boolean =>{
    return state.registration.registered
}

//// App Selectors

export const getIsLoading = (state: AppStateType): boolean =>{
    return state.app.isLoading
}

//// Login Page Selectors

export const getIsLoggedIn = (state: AppStateType): boolean =>{
    return  state.loginization.isLoggedIn
}

export const getLoginError = (state: AppStateType): string =>{
    return state.loginization.error
}