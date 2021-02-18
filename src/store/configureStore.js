import { createStore, combineReducers } from 'redux'
import postsReducer from '../reducers/postsReducer'
import showReducer from '../reducers/showReducer'

//function which returns store object
const configureStore = () => {

    const store = createStore(combineReducers({
        show: showReducer,
        posts: postsReducer
    }))

    return store 
}

export default configureStore