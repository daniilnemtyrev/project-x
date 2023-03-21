import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileState = (state: StateSchema) => state.profile

export const getProfileData = (state: StateSchema) => state.profile?.profile

export const getProfileIsLoading = (state: StateSchema) =>
    state.profile?.isLoading

export const getProfileError = (state: StateSchema) => state.profile?.error
