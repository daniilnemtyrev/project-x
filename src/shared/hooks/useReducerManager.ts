import {
    ReducerListItem,
    ReducersList,
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
import { useAppDispatch } from './useAppDispatch'

export const useReducerManager = (
    reducers: ReducersList,
    removeAfterUnmount = true
) => {
    const dispatch = useAppDispatch()

    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@REMOVE ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
