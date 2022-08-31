const initialState = [
    
]

const shop = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD':
            let item = action.payload
            state = item
            return state
            break;
        default:
            return state
            break;
    }
}

export default shop