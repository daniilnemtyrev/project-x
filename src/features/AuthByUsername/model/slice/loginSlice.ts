import { createSlice } from '@reduxjs/toolkit'
import { login } from '../services/login/login'
import { LoginSchema } from '../types/LoginSchema'

const loginInitialState: LoginSchema = {
    isLoading: false,
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: loginInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(login.fulfilled, (state) => {
                state.isLoading = false
            })

            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: loginActions } = loginSlice

export const { reducer: loginReducer } = loginSlice
