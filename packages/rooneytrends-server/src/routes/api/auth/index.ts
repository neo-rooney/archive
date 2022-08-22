import { FastifyPluginAsync } from 'fastify';

const authRoute: FastifyPluginAsync = async fastify => {
	fastify.post('/login', async () => {
		return 'login';
	});

	fastify.post('/register', async () => {
		return 'register';
	});
};

export default authRoute;
