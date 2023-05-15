import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { FormikDecorator } from 'shared/config/storybook/decorators/FomrikDecorator'
import { Profile } from 'features/EditableProfileCard'
import avatar from 'shared/assets/tests/hacker.jpg'
import { CurrencyEnum } from 'entities/CurrencySelect'
import { CountryEnum } from 'entities/CountrySelect'
import { EditableProfileCard } from './EditableProfileCard'

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = () => (
    <EditableProfileCard />
)

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
