import { CountryEnum } from 'entities/CountrySelect'
import { CurrencyEnum } from 'entities/CurrencySelect'

export interface Profile {
    firstname?: string
    lastname?: string
    age?: number
    currency?: CurrencyEnum
    country?: CountryEnum
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    profile?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}

export enum ValidateProfileErrors {
    INCORRECT_USER = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
}
