import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/ProfileSchema'

const initialState: ProfileSchema = {
    profile: undefined,
    isLoading: false,
    error: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
