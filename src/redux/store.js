import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import thunk from 'redux-thunk'
import commensReducer from './comments-reduser'

let reducers = combineReducers({
	commetnsPage: commensReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
