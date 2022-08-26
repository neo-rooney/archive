import { FastifyPluginAsync } from 'fastify';
import AppError from '../../../lib/AppError.js';
import { getMeSchema } from './schema.js';

export const meRoute: FastifyPluginAsync = async fastify => {
	fastify.get(
		'/',
		{
			schema: getMeSchema,
		},
		async request => {
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
			return request.user;
		},
	);
};
