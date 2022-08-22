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
		async fastify => {
			const user = await userServie.register(fastify.body);
			return { user };
		},
	);
};

export default authRoute;
