//action generator for toggling the show property to true
export const startShowTrue = () => {
    return {
        type: 'TOGGLE_TRUE'
    }
}

//action generator for toggling the show property to false
export const startShowFalse = () => {
    return {
        type: 'TOGGLE_FALSE'
    }
}