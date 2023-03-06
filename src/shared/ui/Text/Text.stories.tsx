import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextVariants } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        title: { control: 'text' },
        text: { control: 'text' },
        variant: { control: TextVariants },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const PrimaryBoth = Template.bind({})
PrimaryBoth.args = {
    title: 'Title',
    text: 'text text text text text text',
    variant: TextVariants.PRIMARY,
}

export const PrimaryTitle = Template.bind({})
PrimaryTitle.args = {
    title: 'Title',
    variant: TextVariants.PRIMARY,
}

export const PrimaryText = Template.bind({})
PrimaryText.args = {
    text: 'text text text text text text',
    variant: TextVariants.PRIMARY,
}

export const ErrorBoth = Template.bind({})
ErrorBoth.args = {
    title: 'Title',
    text: 'text text text text text text',
    variant: TextVariants.ERROR,
}

export const ErrorTitle = Template.bind({})
ErrorTitle.args = {
    title: 'Title',
    variant: TextVariants.ERROR,
}

export const ErrorText = Template.bind({})
ErrorText.args = {
    text: 'text text text text text text',
    variant: TextVariants.ERROR,
}
