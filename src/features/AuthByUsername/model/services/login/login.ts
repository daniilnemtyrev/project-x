import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User, userActions } from 'entities/User'
import { USER_DATA } from 'shared/consts'

interface LoginProps {
    username: string
    password: string
}

export const login = createAsyncThunk<User, LoginProps, ThunkConfig<string>>(
    'login',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI

        try {
            const response = await extra.api.post('/login', authData)

            if (!response) {
                throw new Error()
            }

            localStorage.setItem(USER_DATA, JSON.stringify(response.data))

            dispatch(userActions.setUserData(response.data))

            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue('error')
        }
    }
)
