import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'

export function renderComponent(
    component: ReactNode,
    initialState?: DeepPartial<StateSchema>,
    routes: string[] = ['/']
) {
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={routes}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
