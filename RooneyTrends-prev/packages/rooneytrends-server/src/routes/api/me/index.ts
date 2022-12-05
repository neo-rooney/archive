import { FastifyPluginAsync } from 'fastify';
import AppError from '../../../lib/AppError.js';
import requireAuthPlugin from '../../../plugins/requireAuthPlugin.js';
import { getMeSchema } from './schema.js';

export const meRoute: FastifyPluginAsync = async fastify => {
	fastify.register(requireAuthPlugin);
	fastify.get(
		'/',
		{
			schema: getMeSchema,
		},
		async request => {
			return request.user;
		},
	);
};