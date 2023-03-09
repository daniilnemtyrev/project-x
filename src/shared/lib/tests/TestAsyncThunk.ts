import { AsyncThunkAction } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: AppDispatch

    thunkActionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    getState: () => StateSchema

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.thunkActionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg) {
        const thunkAction = this.thunkActionCreator(arg)
        const result = await thunkAction(
            this.dispatch,
            this.getState,
            undefined
        )

        return result
    }
}
