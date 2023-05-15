import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Select',
    options: [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
    ],
}
