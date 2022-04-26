import {combineReducers} from "redux";
import rulesReducer from "../reducers/rules-reducer";
import { legacy_createStore as createStore } from "redux";

const reducer = combineReducers({
    rules: rulesReducer
})
export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)