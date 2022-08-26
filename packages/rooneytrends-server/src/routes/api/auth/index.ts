import { FastifyPluginAsync, FastifyReply } from 'fastify';
import AppError from '../../../lib/AppError.js';
import UserService from '../../../services/UserService.js';
import { loginSchema, refreshTokenSchema, registerSchema } from './schema.js';
import { AuthBody } from './types.js';

const authRoute: FastifyPluginAsync = async fastify => {
	const userServie = UserService.getInstance();
	fastify.post<{ Body: AuthBody }>(
		'/login',
		{ schema: loginSchema },
		async (request, reply) => {
			const authResult = await userServie.login(request.body);
			setTokenCookie(reply, authResult.tokens);
			return authResult;
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

	fastify.post<{ Body: { refreshToken?: string } }>(
		'/refresh',
		{ schema: refreshTokenSchema },
		async (request, reply) => {
			const refreshToken =
				request.cookies.refresh_token ?? request.body.refreshToken ?? '';
			if (!refreshToken) {
				throw new AppError('BadRequestError');
			}
			const tokens = await userServie.refreshToken(refreshToken);
			setTokenCookie(reply, tokens);
			return tokens;
		},
	);
};

function setTokenCookie(
	reply: FastifyReply,
	tokens: { accessToken: string; refreshToken: string },
) {
	reply.setCookie('accessToken', tokens.accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	});
	reply.setCookie('refreshToken', tokens.refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	});
}

export default authRoute;
