type ErrorName =
	| 'UserExistsError'
	| 'AuthenticationError'
	| 'UnknownError'
	| 'UnauthenticatedError'
	| 'BadRequestError'
	| 'RefreshTokenError';

type ErrorInfo = {
	statusCode: number;
	message: string;
};

interface ErrorPayload {
	UserExistsError: undefined;
	AuthenticationError: undefined;
	UnknownError: undefined;
	UnauthenticatedError: {
		isExpiredToken: boolean;
	};
	BadRequestError: undefined;
	RefreshTokenError: undefined;
}

const statusCodeMap: Record<ErrorName, ErrorInfo> = {
	UserExistsError: {
		message: 'User already exists',
		statusCode: 409,
	},
	AuthenticationError: {
		message: 'Invalid username or password',
		statusCode: 401,
	},
	UnknownError: {
		message: 'Unknown error',
		statusCode: 500,
	},
	UnauthenticatedError: {
		message: 'Unauthenticated',
		statusCode: 401,
	},
	BadRequestError: {
		message: 'Bad request',
		statusCode: 400,
	},
	RefreshTokenError: {
		message: 'Failed to refresh token',
		statusCode: 401,
	},
};

export default class AppError extends Error {
	public statusCode: number;

	constructor(
		public name: ErrorName,
		public payload?: ErrorPayload[ErrorName],
	) {
		const info = statusCodeMap[name];
		super(info.message);
		this.statusCode = info.statusCode;
	}
}

export function isAppError(error: unknown): error is AppError {
	return error instanceof AppError;
}

export const appErrorSchema = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		message: { type: 'string' },
		statusCode: { type: 'number' },
	},
};

export function createAppErrorSchema<T, S>(example: T, payloadSchema?: S) {
	return {
		type: 'object',
		properties: {
			...appErrorSchema.properties,
			...(payloadSchema ? { payload: payloadSchema } : {}),
		},
		example,
	};
}
