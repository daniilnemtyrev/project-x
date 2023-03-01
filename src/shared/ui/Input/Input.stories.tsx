import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        value: { control: 'text' },
        label: { control: 'text' },
        autofocus: { options: [true, false], control: { type: 'radio' } },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Clear = Template.bind({})
Clear.args = {
    value: 'text',
    label: 'Type something',
    autofocus: true,
}
