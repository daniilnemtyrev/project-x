import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../types/profile'

export const updateProfileThunk = createAsyncThunk<
    Profile,
    { values: Profile },
    ThunkConfig<string>
>('profile/update', async (data, thunkApi) => {
    const { values } = data
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.put<Profile>('/profile', values)

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
