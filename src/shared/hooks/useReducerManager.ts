import {
    ReducerListItem,
    ReducersList,
    ReduxStoreWithManager,
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
        Object.entries(reducers).forEach(([name, reducer]: ReducerListItem) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListItem) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@REMOVE ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
