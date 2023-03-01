import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
    user: undefined,
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { actions: userActions } = counterSlice

export const { reducer: userReducer } = counterSlice
