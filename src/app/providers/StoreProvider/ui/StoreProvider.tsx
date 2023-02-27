import { DeepPartial } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { creacteReduxStore } from '../config/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
    const store = creacteReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
