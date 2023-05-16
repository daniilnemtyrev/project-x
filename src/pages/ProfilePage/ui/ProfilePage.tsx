import { ReducersList } from 'app/providers/StoreProvider'
import {
    EditableProfileCard,
    profileReducer,
    fetchProfileData,
    getProfileError,
} from 'features/EditableProfileCard'
import { useEffect } from 'react'
import { useAppDispatch, useReducerManager } from 'shared/hooks'
import { useSelector } from 'react-redux'
import { PageError } from 'widgets/PageError'

const asyncReducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    useReducerManager(asyncReducers)
    const dispatch = useAppDispatch()
    const isError = useSelector(getProfileError)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    if (isError) {
        return <PageError />
    }

    return (
        <div>
            <EditableProfileCard />
        </div>
    )
}

export default ProfilePage
