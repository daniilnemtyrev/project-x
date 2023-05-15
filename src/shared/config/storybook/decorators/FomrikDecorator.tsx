import { Formik, FormikValues } from 'formik'
import { Story } from '@storybook/react'

export const FormikDecorator =
    <T extends FormikValues>(initialValues: T) =>
    (Story: Story) => {
        const handleSubmit = (values: T) => {
            console.log('formik decorator handleSubmit', values)
        }

        return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Story />
            </Formik>
        )
    }
