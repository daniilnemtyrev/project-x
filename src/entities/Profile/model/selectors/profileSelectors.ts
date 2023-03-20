import { StateSchema } from 'app/providers/StoreProvider'

export const profileState = (state: StateSchema) => state.profile

export const profile = (state: StateSchema) => profileState(state).profile

export const isLoading = (state: StateSchema) => profileState(state).isLoading

export const error = (state: StateSchema) => profileState(state).error
