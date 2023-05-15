import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileState = (state: StateSchema) => state.profile

export const getProfileForm = (state: StateSchema) => state.profile?.profile

export const getProfileIsLoading = (state: StateSchema) =>
    state.profile?.isLoading

export const getProfileError = (state: StateSchema) => state.profile?.error

export const getProfileReadonly = (state: StateSchema) =>
    state.profile?.readonly
