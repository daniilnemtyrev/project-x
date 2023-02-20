/* eslint-disable react/prop-types */
import { Story } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (Story: Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
)
