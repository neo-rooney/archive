import { FastifyPluginAsync } from 'fastify';
import UserService from '../../../services/UserService.js';
import { loginSchema, registerSchema } from './schema.js';
import { AuthBody } from './types.js';

const authRoute: FastifyPluginAsync = async fastify => {
	const userServie = UserService.getInstance();
	fastify.post<{ Body: AuthBody }>(
		'/login',
		{ schema: loginSchema },
		async request => {
			return userServie.login(request.body);
		},
	);

	fastify.post<{ Body: AuthBody }>(
		'/register',
		{
			schema: registerSchema,
		},
		async request => {
			return userServie.register(request.body);
		},
	);
};

export default authRoute;
