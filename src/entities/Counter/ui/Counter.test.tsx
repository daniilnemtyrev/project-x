import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderComponent } from 'shared/lib/tests'
import { Counter } from './Counter'

describe('Counter', () => {
    test('click increment ', () => {
        renderComponent(<Counter />, { counter: { value: 10 } })
        const incrementBtn = screen.getByTestId('increment')
        userEvent.click(incrementBtn)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
    })

    test('click decrement ', () => {
        renderComponent(<Counter />, { counter: { value: 100 } })
        const decrementBtn = screen.getByTestId('decrement')
        userEvent.click(decrementBtn)
        userEvent.click(decrementBtn)
        userEvent.click(decrementBtn)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('97')
    })
})
