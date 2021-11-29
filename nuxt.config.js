import { SERVER_API_URL } from './utils/const/index.js';

export default {
	build: {
		babel: {
			plugins: [ [ '@babel/plugin-proposal-private-methods', { loose: true } ] ]
		}
	},
	modules: [ '@nuxtjs/style-resources', '@nuxtjs/axios' ],
	axios: {
		baseURL: process.env.SERVER_API_URL || SERVER_API_URL,
		retry: {
			retries: 3
		}
	},
	plugins: [ { src: '~/plugins/axios.js' } ],
	styleResources: {
		scss: [ '~/css/scss/main.scss' ]
	},
	css: [ 'css/global.css' ]
};
