import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a: UserType, b: UserType) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]
        }
        case 'check': {
            const stateSortAge = [...state.sort(function (a: UserType, b: UserType) {
                {
                    if (a.age > b.age) {
                        return 1;
                    }
                    if (a.age < b.age) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                }
            }

        )]

            return [...stateSortAge.filter(t => t.age > action.payload) ]// need to fix
        }
        default:
            return state
    }
}
