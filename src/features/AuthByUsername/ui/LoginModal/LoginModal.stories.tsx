import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { LoginModal } from './LoginModal'

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        isOpen: { options: [true, false], control: { type: 'radio' } },
    },
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => (
    <LoginModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
}
Default.decorators = [
    StoreDecorator({
        login: {
            isLoading: false,
            error: '',
        },
    }),
]
export const Error = Template.bind({})
Error.args = {
    isOpen: true,
}
Error.decorators = [
    StoreDecorator({
        login: {
            isLoading: false,
            error: 'Error',
        },
    }),
]

export const Loading = Template.bind({})
Loading.args = {
    isOpen: true,
}
Loading.decorators = [
    StoreDecorator({
        login: {
            isLoading: true,
            error: '',
        },
    }),
]
