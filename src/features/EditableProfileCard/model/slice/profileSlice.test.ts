import { DeepPartial } from '@reduxjs/toolkit'
import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema } from '../types/profile'
import { profileReducer, profileActions } from './profileSlice'

const data = {
    username: 'admin',
    age: 22,
    country: CountryEnum.RU,
    lastname: 'adasw',
    first: 'asd',
    city: 'asf',
    currency: CurrencyEnum.USD,
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({ readonly: true })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        }

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            error: undefined,
        })
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: true,
        }

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '', { values: data })
            )
        ).toEqual({
            isLoading: false,
            error: undefined,
            readonly: true,
            profile: data,
        })
    })
})
