import { createStore,combineReducers } from "redux";

import shop from './shop';
import users from './users';

const reducer = combineReducers({
    shop,
    users,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store