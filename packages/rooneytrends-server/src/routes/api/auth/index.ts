import { FastifyPluginAsync } from 'fastify';
import UserService from '../../../services/UserService.js';
import { loginSchema, registerSchema } from './schema.js';

const authRoute: FastifyPluginAsync = async fastify => {
	const userServie = UserService.getInstance();
	fastify.post('/login', { schema: loginSchema }, async () => {
		return userServie.login();
	});

	fastify.post(
		'/register',
		{
			schema: registerSchema,
		},
		async () => {
			return userServie.register();
		},
	);
};

export default authRoute;
