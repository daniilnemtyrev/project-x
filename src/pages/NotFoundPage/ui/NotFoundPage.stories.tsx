import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <NotFoundPage {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
Default.args = {}
