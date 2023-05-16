import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { getLoginError, getLoginIsLoading } from './loginSelector'

describe('loginSelectors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
})
