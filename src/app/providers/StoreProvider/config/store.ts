import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api'
import { createReducerManager } from './createReducerManager'
import { StateSchema } from './StateSchema'

export function creacteReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
) {
    const staticReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }
    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type RootState = ReturnType<typeof creacteReduxStore>['getState']
export type AppDispatch = ReturnType<typeof creacteReduxStore>['dispatch']
