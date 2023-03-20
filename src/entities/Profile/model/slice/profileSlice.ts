import { createSlice } from '@reduxjs/toolkit'
import { CountryEnum, CurrencyEnum } from 'shared/consts'
import { fetchProfileThunk } from '../services/fetchProfileThunk'
import { ProfileSchema } from '../types/ProfileSchema'

const initialState: ProfileSchema = {
    profile: {
        firstname: '',
        lastname: '',
        age: 0,
        currency: CurrencyEnum.EUR,
        country: CountryEnum.EU,
        city: '',
        username: '',
        avatar: '',
    },
    isLoading: false,
    error: '',
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(fetchProfileThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })

            .addCase(fetchProfileThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
