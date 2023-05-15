import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { Profile } from 'features/EditableProfileCard'
import { FormikDecorator } from 'shared/config/storybook/decorators/FomrikDecorator'
import avatar from 'shared/assets/tests/hacker.jpg'
import ProfilePage from './ProfilePage'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Default = Template.bind({})
Default.decorators = [
    StoreDecorator({
        profile: {
            profile: {
                firstname: 'Lupa',
                lastname: 'Pupov',
                age: 22,
                currency: CurrencyEnum.RUB,
                country: CountryEnum.RU,
                city: 'Balance',
                username: 'Lol',
                avatar,
            },
            isLoading: false,
            readonly: true,
        },
    }),
    FormikDecorator<Profile>({
        firstname: 'Lupa',
        lastname: 'Pupov',
        age: 22,
        currency: CurrencyEnum.RUB,
        country: CountryEnum.RU,
        city: 'Balance',
        username: 'Lol',
        avatar,
    }),
]
