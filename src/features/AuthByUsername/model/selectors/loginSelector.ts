import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginError = (state: StateSchema) => state.login?.error

export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading
