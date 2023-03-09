import { StateSchema } from 'app/providers/StoreProvider'
import { loginInitialState } from '../slice/loginSlice'

export const loginSelector = (state: StateSchema) =>
    state?.login || loginInitialState
