import {combineReducers, applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import rulesReducer from "../reducers/rules-reducer";
import thunk from 'redux-thunk'

const reducer = combineReducers({
    rules: rulesReducer
})
export default createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) 
   
)