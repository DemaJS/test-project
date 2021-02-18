import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./DialogsReducer";
import exampleReducer from "./ExampleReducer";
import usersReducer from "./UsersReducer";
import profileReducer from "./ProfileReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    examplePage:exampleReducer,
    usersPage:usersReducer,
    profilePage:profileReducer,
    auth:authReducer,
    form:formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.exampleStore = store

export default store