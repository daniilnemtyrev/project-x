import { ComponentStory, ComponentMeta } from '@storybook/react'

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
