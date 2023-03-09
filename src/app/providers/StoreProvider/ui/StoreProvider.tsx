import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartialReducers, StateSchema } from '../config/StateSchema'
import { creacteReduxStore } from '../config/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartialReducers
}

export function StoreProvider({
    children,
    initialState,
    asyncReducers,
}: StoreProviderProps) {
    const store = creacteReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return <Provider store={store}>{children}</Provider>
}
