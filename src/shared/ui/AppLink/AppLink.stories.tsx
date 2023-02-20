import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppLinkVariants, AppLink } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        to: { control: '/' },
        children: { control: 'text' },
        variant: { control: AppLinkVariants },
    },
} as ComponentMeta<typeof AppLink>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({})
Primary.args = {
    to: '/',
    variant: AppLinkVariants.PRIMARY,
    children: 'text',
}

export const Inverted = Template.bind({})
Inverted.args = {
    to: '/',
    variant: AppLinkVariants.INVERTED,
    children: 'text',
}
