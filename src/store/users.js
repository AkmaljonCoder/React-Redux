const initialState = [
    
]

const users = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD_USERS':
            let item = action.payload
            state = item
            return state
            break;
        default:
            return state
            break;
    }
}

export default users