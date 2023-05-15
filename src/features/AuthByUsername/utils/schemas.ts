import { object, string } from 'yup'

export const loginValidation = object({
    username: string().required(),
    password: string().required(),
})
