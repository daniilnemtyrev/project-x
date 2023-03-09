import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let reducersNamesToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (reducersNamesToRemove.length > 0) {
                state = { ...state }

                reducersNamesToRemove.forEach((name) => delete state[name])

                reducersNamesToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (name: StateSchemaKey, reducer: Reducer) => {
            if (!name || reducers[name]) {
                return
            }

            reducers[name] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (name: StateSchemaKey) => {
            if (!name || !reducers[name]) {
                return
            }

            delete reducers[name]
            reducersNamesToRemove.push(name)
            combinedReducer = combineReducers(reducers)
        },
    }
}
