import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from './Sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
Default.args = {}
