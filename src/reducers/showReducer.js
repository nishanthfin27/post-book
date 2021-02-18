//Reducer for show property

const initialStateValue = false

const showReducer = (state = initialStateValue, action) => {
    switch(action.type) {
        case 'TOGGLE_TRUE': {
            return true
        }
        case 'TOGGLE_FALSE': {
            return false
        }
        default: {
            return state 
        }
    }
}

export default showReducer