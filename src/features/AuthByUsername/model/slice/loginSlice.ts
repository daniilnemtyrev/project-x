import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../services/login/login'
import { LoginSchema } from '../types/LoginSchema'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },

        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })

            .addCase(login.fulfilled, (state, action) => {
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
