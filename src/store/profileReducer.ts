import { UserDataType } from "../api/auth-api"

type SetUserDataType ={
    type: 'PROFILE/SET-USER-DATA',
    data: UserDataType
}

type ProfileReducerActionType = SetUserDataType

const initialState = {
    userData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,

        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,


    }
}

type ProfileReducerInitialStateType = {
    userData: UserDataType
}

export const profileReducer = (state:ProfileReducerInitialStateType = initialState, action: ProfileReducerActionType): ProfileReducerInitialStateType =>{
    switch (action.type) {
        case 'PROFILE/SET-USER-DATA':
            return {
                ...state,
                userData: action.data
            }
        default:
            return state
    }

}

export const setUserDataAC = (data: UserDataType): SetUserDataType => ({type: 'PROFILE/SET-USER-DATA', data})
