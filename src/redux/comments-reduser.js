import { commentsAPI } from '../api/api'

const SET_COMMENS_PROFILE = 'SET_COMMENS_PROFILE'

let initialState = {
	comments: [],
}
const commensReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COMMENS_PROFILE: {
			return { ...state, comments: action.comments }
		}
		default:
			return state
	}
}
//****-ACTIONS-****
export const setCommensProfile = comments => {
	return { type: SET_COMMENS_PROFILE, comments }
}

export const getCommentsProfile = userId => {
	return dispatch => {
		commentsAPI.getCommentsData(userId).then(data => {
			dispatch(setCommensProfile(data))
		})
	}
}

export default commensReducer
