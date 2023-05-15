import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { CountryEnum } from 'entities/CountrySelect'
import { fetchProfileThunk } from '../services/fetchProfileThunk'
import { Profile, ProfileSchema } from '../types/profile'
import { updateProfileThunk } from '../services/updateProfileThunk'

const initialState: ProfileSchema = {
    profile: {
        firstname: '',
        lastname: '',
        age: undefined,
        currency: CurrencyEnum.EUR,
        country: CountryEnum.EU,
        city: '',
        username: '',
        avatar: '',
    },
    isLoading: false,
    readonly: true,
    error: '',
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
    },
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

            .addCase(updateProfileThunk.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(updateProfileThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })

            .addCase(updateProfileThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
