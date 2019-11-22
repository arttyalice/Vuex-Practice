import axios from "axios"
import user from './user'

let instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default {
    user: user(instance)
}