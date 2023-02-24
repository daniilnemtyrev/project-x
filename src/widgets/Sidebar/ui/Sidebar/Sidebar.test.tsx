import { fireEvent, screen } from '@testing-library/react'
import { renderComponent } from 'shared/lib/tests'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('collapse sidebar', () => {
        renderComponent(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
