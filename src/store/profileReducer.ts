import { UserDataType } from "../api/auth-api"

type SetUserDataActionType ={
    type: 'PROFILE/SET-USER-DATA',
    data: UserDataType
}
type SetProfileIsEditingActionType ={
    type: 'PROFILE/SET-IS-EDITING',
    isEditing: boolean
}

type ProfileReducerActionType = SetUserDataActionType | SetProfileIsEditingActionType

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


    },
    isEditing: false,
}

type ProfileReducerInitialStateType = {
    userData: UserDataType,
    isEditing: boolean
}

export const profileReducer = (state:ProfileReducerInitialStateType = initialState, action: ProfileReducerActionType): ProfileReducerInitialStateType =>{
    switch (action.type) {
        case 'PROFILE/SET-USER-DATA':
            return {
                ...state,
                userData: action.data
            }
        case 'PROFILE/SET-IS-EDITING':
            return {
                ...state,
                isEditing: action.isEditing
            }
        default:
            return state
    }

}

export const setUserDataAC = (data: UserDataType): SetUserDataActionType => ({type: 'PROFILE/SET-USER-DATA', data})
export const setProfileIsEditingAC = (isEditing: boolean): SetProfileIsEditingActionType =>({type:"PROFILE/SET-IS-EDITING", isEditing})
