import { TestAsyncThunk } from 'shared/lib/tests'
import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { fetchProfileData } from './fetchProfileData'

const profile = {
    username: 'admin',
    age: 22,
    country: CountryEnum.RU,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: CurrencyEnum.USD,
}

describe('fetchProfileData.test', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalledTimes(1)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profile)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
