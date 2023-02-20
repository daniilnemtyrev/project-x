import { addDecorator } from '@storybook/react'
import { withThemes } from 'storybook-addon-themes/react'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator.tsx'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator.tsx'
import { I18nextDecorator } from '../../src/shared/config/storybook/decorators/I18nextDecorator.tsx'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator.tsx'

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
            { name: 'light-theme', class: ['app', 'light'], color: '#fff' },
            { name: 'dark-theme', class: ['app', 'dark'], color: '#000' },
        ],
    },
}

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'ru', title: 'Russian' },
            ],
        },
    },
}

addDecorator(withThemes)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator)
addDecorator(I18nextDecorator)
addDecorator(RouterDecorator)
