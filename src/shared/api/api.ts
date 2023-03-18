import axios from 'axios'
import { USER_DATA } from 'shared/consts'

export const $api = axios.create({
    baseURL: __API_URL__,
    headers: {
        authorization: localStorage.getItem(USER_DATA),
    },
})
