import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { USER_DATA } from 'shared/consts'

interface LoginProps {
    username: string
    password: string
}

export const login = createAsyncThunk<
    User,
    LoginProps,
    { rejectValue: string }
>('login', async (authData, thunkAPI) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/login',
            authData
        )

        if (!response) {
            throw new Error()
        }

        localStorage.setItem(USER_DATA, JSON.stringify(response.data))

        thunkAPI.dispatch(userActions.setUserData(response.data))

        return response.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue('error')
    }
})
