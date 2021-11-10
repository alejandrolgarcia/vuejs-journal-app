import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-a129c-default-rtdb.firebaseio.com'
})

export default journalApi