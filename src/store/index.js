
import { createStore } from 'vuex'
import journal from '../modules/journal/store/journal';

const store = createStore({
    modules: {
        journal
    }
})

export default store