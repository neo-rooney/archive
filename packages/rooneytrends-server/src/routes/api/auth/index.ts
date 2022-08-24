import { FastifyPluginAsync } from 'fastify';
import UserService from '../../../services/UserService.js';
import { loginSchema, registerSchema } from './schema.js';
import { AuthBody } from './types.js';

const authRoute: FastifyPluginAsync = async fastify => {
	const userServie = UserService.getInstance();
	fastify.post('/login', { schema: loginSchema }, async () => {
		return userServie.login();
	});

	fastify.post<{ Body: AuthBody }>(
		'/register',
		{
			schema: registerSchema,
		},
		async request => {
			const authResult = await userServie.register(request.body);
			return authResult;
		},
	);
};

export default authRoute;
