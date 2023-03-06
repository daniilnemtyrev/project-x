import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const SignInNavbar = Template.bind({})
SignInNavbar.args = {}
SignInNavbar.decorators = [
    StoreDecorator({
        user: {
            user: undefined,
        },
    }),
]

export const SignOutNavbar = Template.bind({})
SignOutNavbar.args = {}
