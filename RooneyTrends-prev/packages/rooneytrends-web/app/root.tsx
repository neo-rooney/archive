import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import GlobalStyle from './components/GlobalStyle';
import type { User } from './lib/api/auth';
import { getMyAccount } from './lib/api/auth';
import { setClientCookie } from './lib/client';

export const loader: LoaderFunction = async ({ request }) => {
	const cookie = request.headers.get('Cookie');
	if (!cookie) return null;

	setClientCookie(cookie);
	try {
		const me = await getMyAccount();
		return me;
	} catch (e) {
		return null;
	}
};

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	const data = useLoaderData<User | null>();
	console.log(data);
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				{typeof document === 'undefined' ? '__STYLES__' : null}
			</head>
			<body>
				<GlobalStyle />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
