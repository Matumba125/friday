import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})


export const authApi = {
    login(data: LoginParamsType) {
        return instance.post<UserDataType>(`/auth/login`, data)
    },

    register(data: RegisterParamsType) {
        return instance.post<RegisterResponseType>(`/auth/register`, data)
    },

    me() {
        return instance.post<ResponseType>(`/auth/me`)
    },

    update(data: UpdateParamsType) {
        return instance.put<ResponseType>(`/auth/me`, data)
    },

    logout() {
        return instance.delete<InfoResponseType>(`/auth/me`)
    },

    forgot(data: ForgotParamsType) {
        return instance.post<InfoResponseType>(`/auth/forgot`, data)
    },

    setNewPassword(data: SetNewPasswordParamsType) {
        return instance.post<InfoResponseType>(`/auth/set-new-password`, data)
    },

}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type RegisterParamsType = {
    email: string
    password: string
}

export type ResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод

    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean

    error?: string
}

export type UserDataType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
}

export type RegisterResponseType = {
    addedUser: {}
    error?: string
}

export type UpdateParamsType = {
    name: string
    avatar: string
}

export type InfoResponseType = {
    info: string
    error: string
}

export type ForgotParamsType = {
    email: string
    from: string
    message: string
}

export type SetNewPasswordParamsType = {
    password: string
    resetPasswordToken: string
}
