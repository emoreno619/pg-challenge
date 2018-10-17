import UserConstants from './constants';

const initialState = {
	users: [],
}

export const fetchUserSuccess = (state = {}, action) => {
	let users = state.users;
	users = {
		...users,
		[action.payload[0].id] : action.payload[0]
	};
	return { ...state, users };
};

export const fetchUserError = (state = {}, action) => {
	console.error(action.payload);
	return { ...state };
};

export const handlers = {
	[UserConstants.ON_FETCH_USER_SUCCESS]: fetchUserSuccess,
	[UserConstants.ON_FETCH_USER_ERROR]: fetchUserError,
};

export const userReducer = function reducer(state = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action);
	} else {
		return state;
	}
};