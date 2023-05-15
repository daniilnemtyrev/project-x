import { Profile, ValidateProfileErrors } from '../types/profile'

export const validateProfileData = (profile: Profile) => {
    const errors = []
    const { firstname, lastname, age } = profile

    if (!firstname || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE)
    }
}
