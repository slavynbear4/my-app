import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profile_reducer.js';
import dialogsReducer from './dialogs_reducer.js';
import sidebarReducer from './sidebar_reducer.js';
import usersReducer from './users_reducer.js';
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profilePage: profileReducer,
	messagePage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
