import { object, string, number } from 'yup'

export const profileValidation = object({
    firstname: string().required(),
    lastname: string().required(),
    age: number().required().positive().integer(),
    city: string(),
    username: string(),
    avatar: string().required(),
})
