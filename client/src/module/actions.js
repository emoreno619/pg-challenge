import axios from 'axios';

const AJAX = axios.create({
});

export const fetchUserDetail = id => {
	return (dispatch, getState) => {
		const params = { user_id: id };
		const request = {
			// params,
			method: 'GET',
			url: `/api/user/${id}`,
		};

		return AJAX.request(request).then(
			resp => {
				console.log('eduardo');
				console.log(resp);
				// dispatch(fetchUserSuccess(resp.data));
			},
			err => {
				console.log('error');
				// dispatch(fetchUserError(err));
			},
		);
	};
}