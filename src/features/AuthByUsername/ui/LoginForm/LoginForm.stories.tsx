import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

import LoginForm from './LoginForm'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
    StoreDecorator({
        login: {
            isLoading: false,
            error: 'ERROR',
        },
    }),
]

export const Default = Template.bind({})
Default.decorators = [
    StoreDecorator({
        login: {
            isLoading: false,
        },
    }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
    StoreDecorator({
        login: {
            isLoading: true,
        },
    }),
]
