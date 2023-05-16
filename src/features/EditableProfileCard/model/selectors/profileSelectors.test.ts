import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'
import {
    getProfile,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
} from './profileSelectors'

describe('profileSelectors.test', () => {
    test('should return profile', () => {
        const profile = {
            username: 'admin',
            age: 22,
            country: CountryEnum.RU,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: CurrencyEnum.USD,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                profile,
            },
        }
        expect(getProfile(state as StateSchema)).toEqual(profile)
    })

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should return Readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
})
