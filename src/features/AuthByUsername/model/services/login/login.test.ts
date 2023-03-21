import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests'
import { login } from './login'

describe('login.test', () => {
    test('fulfilled', async () => {
        const user = { username: 'user', id: 1 }
        const thunk = new TestAsyncThunk(login)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: user }))
        const result = await thunk.callThunk({
            username: 'user',
            password: 'password',
        })

        expect(thunk.api.post).toHaveBeenCalledTimes(1)
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setUserData(user)
        )
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(login)
        thunk.api.post.mockReturnValue(Promise.resolve(null))
        const result = await thunk.callThunk({
            username: 'user',
            password: 'password',
        })

        expect(thunk.api.post).toHaveBeenCalledTimes(1)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
