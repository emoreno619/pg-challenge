import axios from 'axios';

const AJAX = axios.create({
	// baseURL: '/api/orion',
	// // Ideally we don't want to use cookies
	// // so this should be set to false when we implement
	// // cookie-less sign out and iframes
	// withCredentials: true,
});

export const fetchUserDetail = id => {
	return (dispatch, getState) => {
		const params = { user_id: id };
		const request = {
			params,
			method: 'GET',
			url: `users/${id}`,
		};
		// request.headers = {
		// 	'X-API-Version': 3,
		// };

		// dispatch(fetchingSubNetworkSettings());
		return AJAX.request(request).then(
			resp => {
				console.log('eduardo');
				console.log(resp);
				// dispatch(fetchSubNetworkSettingsSuccess(resp.data));
			},
			err => {
				// dispatch(fetchSubNetworkSettingsError(err));
			},
		);
	};
}