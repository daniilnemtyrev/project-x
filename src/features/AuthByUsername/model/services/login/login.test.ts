import { AppDispatch, StateSchema } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests'
import { login } from './login'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('login.test', () => {
    test('fulfilled', async () => {
        const user = { username: 'user', id: 1 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }))
        const thunk = new TestAsyncThunk(login)
        const result = await thunk.callThunk({
            username: 'user',
            password: 'password',
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setUserData(user)
        )
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve(null))
        const thunk = new TestAsyncThunk(login)
        const result = await thunk.callThunk({
            username: 'user',
            password: 'password',
        })

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
