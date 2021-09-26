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

//// Password Recovery Selectors

export const getIsSended = (state: AppStateType): boolean =>{
    return state.password.isSended
}

export const getPasswordRecoveryError = (state: AppStateType): string =>{
    return state.password.error
}

export const getPasswordSetted = (state: AppStateType): boolean =>{
    return state.password.passwordSetted
}

//// Profile Page Selectors

export const getIsProfileEditing = (state:AppStateType): boolean =>{
    return state.profile.isEditing
}