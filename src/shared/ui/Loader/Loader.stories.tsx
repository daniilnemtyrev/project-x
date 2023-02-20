import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
