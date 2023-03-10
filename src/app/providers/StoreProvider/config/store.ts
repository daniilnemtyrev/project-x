import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { createReducerManager } from './createReducerManager'
import { StateSchema } from './StateSchema'

export function creacteReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const staticReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }
    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type RootState = ReturnType<typeof creacteReduxStore>['getState']
export type AppDispatch = ReturnType<typeof creacteReduxStore>['dispatch']
