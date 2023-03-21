import {
    CombinedState,
    configureStore,
    ReducersMapObject,
    Reducer,
} from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api'
import { createReducerManager } from './createReducerManager'
import { StateSchema, ThunkExtraArgs } from './StateSchema'

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

    const extraArgument: ThunkExtraArgs = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
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
