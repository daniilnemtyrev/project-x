import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { CountryEnum } from 'entities/CountrySelect'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { ProfileSchema } from '../types/profile'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

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
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })

            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
                state.error = undefined
            })

            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
