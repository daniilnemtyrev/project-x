import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../types/ProfileSchema'

export const fetchProfileThunk = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.get('/profile')

        if (!response) {
            throw new Error()
        }

        return response.data
    } catch (err) {
        console.log(err)
        return rejectWithValue('error')
    }
})
