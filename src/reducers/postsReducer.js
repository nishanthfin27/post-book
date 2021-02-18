//Reducer for posts or articles

const initialPostValue = []

const postsReducer = (state = initialPostValue, action) => {
    switch(action.type) {
        case 'POST_DATA': {
            return [action.payload,...state]
        }
        default: {
            return state
        }
    }
}

export default postsReducer