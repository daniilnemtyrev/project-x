import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartialReducers } from 'app/providers/StoreProvider/config/StateSchema'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: DeepPartialReducers = {
    login: loginReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartialReducers) =>
    (Story: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        )
