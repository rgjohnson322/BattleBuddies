import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    user: userReducer
})

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;

export default createStore (rootReducer, compose(devTools));