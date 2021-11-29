export default ({ $axios, store, redirect }) => {
	$axios.onRequest(async (config) => {
		if (store.state.accessToken && store.state.refreshToken) {
			config.headers.common['Authorization'] = `Bearer ${store.state.accessToken}`;
			config.headers.common['refreshtoken'] = store.state.refreshToken;
		}

		return config;
	});

	$axios.onResponse((response) => {
		return response;
	});

	$axios.onError((error) => {
		if (error.response) {
			throw error.response.data.message;
		}
	});
};
