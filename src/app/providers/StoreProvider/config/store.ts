import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { StateSchema } from './StateSchema'

export function creacteReduxStore(initialState?: StateSchema) {
    const rootReducer = combineReducers({
        user: userReducer,
        login: loginReducer,
    })

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}

const store = creacteReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
