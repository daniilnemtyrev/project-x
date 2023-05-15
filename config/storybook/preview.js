import { withThemes } from 'storybook-addon-themes/react'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator'
import i18n from './i18next.js'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light-theme',
        list: [
            {
                name: 'light-theme',
                class: ['app', 'light-theme'],
                color: '#fff',
            },
            { name: 'dark-theme', class: ['app', 'dark-theme'], color: '#000' },
        ],
    },
    i18n,
    locale: 'en',
    locales: {
        en: 'English',
        ru: 'Russian',
    },
}

export const decorators = [
    withThemes,
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
]
