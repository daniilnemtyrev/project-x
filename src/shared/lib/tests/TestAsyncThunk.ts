import { AsyncThunkAction } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: AppDispatch

    thunkActionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    getState: () => StateSchema

    api: jest.MockedFunctionDeep<AxiosStatic>

    navigate: jest.MockedFn<any>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.thunkActionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk(arg: Arg) {
        const thunkAction = this.thunkActionCreator(arg)
        const result = await thunkAction(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        })

        return result
    }
}
