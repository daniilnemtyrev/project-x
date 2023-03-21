import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import {
    StateSchema,
    StoreProvider,
    ReducersList,
} from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        )
