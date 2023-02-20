import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonVariants } from '.'

import { Button } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        variant: { control: ButtonVariants },
    },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Clear = Template.bind({})
Clear.args = {
    variant: ButtonVariants.CLEAR,
    children: 'text',
}

export const Outline = Template.bind({})
Outline.args = {
    variant: ButtonVariants.OUTLINE,
    children: 'text',
}
