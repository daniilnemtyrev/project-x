import { ReducersList } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { useReducerManager } from 'shared/hooks'

const asyncReducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    useReducerManager(asyncReducers)
    const { t } = useTranslation('profile')

    return <div>{t('title', { ns: 'profile' })}</div>
}

export default ProfilePage
