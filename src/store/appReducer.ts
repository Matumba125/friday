

////// Types
   ////////// Action Types  
type SetIsLoadingActionType={
    type: 'APP/SET-IS-LOADING',
    isLoading: boolean
} 

type AppReducerActionTypes = SetIsLoadingActionType

   ////////// Data Types
    
type AppReducerInitialStateType = {
    isLoading: boolean
}

/////////// State

const initialState = {
    isLoading: false
}

export const appReducer = (state: AppReducerInitialStateType = initialState, action: AppReducerActionTypes): AppReducerInitialStateType =>{
    switch (action.type){
        case "APP/SET-IS-LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: 
            return state
    }
}

/// Actions

export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType =>({
    type: "APP/SET-IS-LOADING",
    isLoading
} as const)