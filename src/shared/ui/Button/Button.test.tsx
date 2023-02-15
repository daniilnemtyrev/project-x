import { render, screen } from '@testing-library/react'
import { Button, ButtonVariants } from './Button'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('clear varinat', () => {
        render(<Button variant={ButtonVariants.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
