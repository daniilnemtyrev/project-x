import { CurrencyEnum, CountryEnum } from 'shared/consts'

export interface Profile {
    firstname: string
    lastname: string
    age: number
    currency: CurrencyEnum
    country: CountryEnum
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    profile?: Profile
    isLoading?: boolean
    error?: string
}
