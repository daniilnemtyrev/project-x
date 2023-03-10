import {
    ReducersMapObject,
    AnyAction,
    Reducer,
    CombinedState,
    DeepPartial,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    user: UserSchema
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>
    add: (name: StateSchemaKey, reducer: Reducer) => void
    remove: (name: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

export type ReducerListItem = [StateSchemaKey, Reducer]

export type DeepPartialReducers = DeepPartial<ReducersMapObject<StateSchema>>
