import { ComponentStory, ComponentMeta } from '@storybook/react'
import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
