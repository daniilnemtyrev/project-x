import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_DATA } from 'shared/consts/localstorage'
import { User, UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
    user: undefined,
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        initUser: (state) => {
            const user = localStorage.getItem(USER_DATA)
            if (user) {
                state.user = JSON.parse(user)
            }
            state._inited = true
        },
        logout: (state) => {
            state.user = undefined
            localStorage.removeItem(USER_DATA)
        },
    },
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
