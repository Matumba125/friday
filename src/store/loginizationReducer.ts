

const inititialState = { isLoggetIn: false }
type LoginizetionReducerInititialStateType = typeof inititialState

type ActionType = ReturnType<typeof setIsLoggedInAC>

export const loginizationReducer = (state: LoginizetionReducerInititialStateType = inititialState, action: ActionType): LoginizetionReducerInititialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return { ...state, isLoggetIn: action.value }
    }
    return state
}

export const setIsLoggedInAC = (value: boolean) => ({ type: 'login/SET-IS-LOGGED-IN', value } as const)