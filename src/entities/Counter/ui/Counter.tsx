/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonVariants } from 'shared/ui/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export function Counter() {
    const dispath = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispath(counterActions.increment())
    }

    const decrement = () => {
        dispath(counterActions.decrement())
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 data-testid="counter-value">{counterValue}</h1>
            <Button
                data-testid="increment"
                variant={ButtonVariants.FUTURE}
                onClick={increment}
            >
                +
            </Button>
            <Button
                data-testid="decrement"
                variant={ButtonVariants.FUTURE}
                onClick={decrement}
            >
                -
            </Button>
        </div>
    )
}
