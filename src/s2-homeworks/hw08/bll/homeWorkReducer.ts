import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up' ? [...state.sort(function (a: UserType, b: UserType) {
                    {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a должно быть равным b
                        return 0;
                    }
                }
            )] : [...state.sort(function (a: UserType, b: UserType) {
                    {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (a.name < b.name) {
                            return 1;
                        }
                        // a должно быть равным b
                        return 0;
                    }
                }
            )] // need to fix
        }
        case 'check': {
            const stateSortAge = [...state.sort(function (a: UserType, b: UserType) {
                    if (action.payload === 'up') {
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
            return stateSortAge.filter(t=> t.age>18) // need to fix
        }
        default:
            return state
    }
}
