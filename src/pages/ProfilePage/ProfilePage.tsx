import { ReducersList } from 'app/providers/StoreProvider'
import { ProfileCard, profileReducer } from 'entities/Profile'
import { useReducerManager } from 'shared/hooks'

const asyncReducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    // useReducerManager(asyncReducers)

    return (
        <div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage
