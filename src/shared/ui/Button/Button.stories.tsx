import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonSizes, ButtonVariants } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        variant: { control: ButtonVariants },
        size: { control: ButtonSizes },
        square: { options: [true, false], control: { type: 'radio' } },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

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

export const Future = Template.bind({})
Future.args = {
    variant: ButtonVariants.FUTURE,
    children: 'text',
    square: false,
}

export const SquareS = Template.bind({})
SquareS.args = {
    variant: ButtonVariants.BACKGROUND_INVERT,
    size: ButtonSizes.S,
    children: 'text',
    square: true,
}

export const SquareM = Template.bind({})
SquareM.args = {
    variant: ButtonVariants.BACKGROUND_INVERT,
    size: ButtonSizes.M,
    children: 'text',
    square: true,
}

export const SquareL = Template.bind({})
SquareL.args = {
    variant: ButtonVariants.BACKGROUND_INVERT,
    size: ButtonSizes.L,
    children: 'text',
    square: true,
}
