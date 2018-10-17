import axios from 'axios';
import UserConstants from './constants';

export const createUser = id => {
	return (dispatch, getState) => {
		const request = {
			data: {email: 'eduardo@gmail.com', password:'abc', name:'eduardo'},
			method: 'POST',
			url: `http://localhost:1337/api/signup`,
		};

		return axios.request(request).then(
			resp => {
				console.log(resp);
				// dispatch(createUserSuccess(resp.data));
			},
			err => {
				// dispatch(createUserError(err));
			},
		);
	};
}


export const fetchUser = id => {
	return (dispatch, getState) => {
		const request = {
			// params,
			method: 'GET',
			url: `http://localhost:1337/api/user/${id}`,
		};

		return axios.request(request).then(
			resp => {
				console.log(resp);
				dispatch(fetchUserSuccess(resp.data));
			},
			err => {
				dispatch(fetchUserError(err));
			},
		);
	};
}

const fetchUserSuccess = data => ({
	type: UserConstants.ON_FETCH_USER_SUCCESS,
	payload: data,
});

const fetchUserError = data => ({
	type: UserConstants.ON_FETCH_USER_ERROR,
	payload: data,
});