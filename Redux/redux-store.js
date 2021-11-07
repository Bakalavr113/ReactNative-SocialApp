import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,

})
let store = createStore(reducers, applyMiddleware(thunk));
export default store