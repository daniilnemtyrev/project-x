import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainPage> = () => <MainPage />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
