import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import AppError from '../lib/AppError.js';

const requireAuthPluginAsync: FastifyPluginAsync = async fastify => {
	fastify.addHook('preHandler', async (request, reply) => {
		if (request.isExpiredToken) {
			throw new AppError('UnauthenticatedError', {
				isExpiredToken: true,
			});
		}
		if (!request.user) {
			throw new AppError('UnauthenticatedError', {
				isExpiredToken: false,
			});
		}
	});
};

const requireAuthPlugin = fp(requireAuthPluginAsync, {
	name: 'requireAuthPlugin',
});

export default requireAuthPlugin;
