import { ReducersList } from 'app/providers/StoreProvider'
import { ProfileCard, profileReducer } from 'entities/Profile'
import { fetchProfileThunk } from 'entities/Profile/model/services/fetchProfileThunk'
import { useEffect } from 'react'
import { useAppDispatch, useReducerManager } from 'shared/hooks'

const asyncReducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    useReducerManager(asyncReducers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileThunk())
    }, [dispatch])

    return (
        <div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage
