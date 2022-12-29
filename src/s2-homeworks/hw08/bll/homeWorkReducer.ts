import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a: UserType, b: UserType) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        }
        case 'check': {
            // const stateSortAge = [...state].sort(function (a: UserType, b: UserType) {
            //         {
            //             if (a.age > b.age) {
            //                 return 1;
            //             }
            //             if (a.age < b.age) {
            //                 return -1;
            //             }
            //             return 0;
            //         }
            //     }
            // )

            return [...state].filter(t => t.age > action.payload)// need to fix
        }
        default:
            return state
    }
}
