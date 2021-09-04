import { profileAPI } from '../api/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	post: [],
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE: {
			return { ...state, post: action.post }
		}
		default:
			return state
	}
}
//****-ACTIONS-****
export const setPostsProfile = post => {
	return { type: SET_USER_PROFILE, post }
}

export const getPostsProfile = userId => {
	return dispatch => {
		profileAPI.getProfileData(userId).then(data => {
			dispatch(setPostsProfile(data))
		})
	}
}

export default profileReducer
