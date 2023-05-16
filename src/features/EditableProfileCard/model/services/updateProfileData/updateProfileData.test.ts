import { TestAsyncThunk } from 'shared/lib/tests'
import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { updateProfileData } from './updateProfileData'

const profile = {
    username: 'admin',
    age: 22,
    country: CountryEnum.RU,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: CurrencyEnum.USD,
}

describe('updateProfileData.test', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfileData)
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
        const result = await thunk.callThunk({ values: profile })

        expect(thunk.api.put).toHaveBeenCalledTimes(1)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profile)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfileData)
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ values: profile })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
