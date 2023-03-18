import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()

    const store = creacteReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return <Provider store={store}>{children}</Provider>
}
