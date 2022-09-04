import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import AuthForm from '~/components/AuthForm';
import FullHeightPage from '~/components/FullHeightPage';
import Header from '~/components/Header';
import HeaderBackButton from '~/components/HeaderBackButton';
import { useGoBack } from '~/hooks/useGoBack';

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const username = form.get('username');
	const password = form.get('password');
	await new Promise(resolve => setTimeout(resolve, 1000));
	console.log({ username, password });
	return json({
		text: 'hello world',
	});
};

export default function Register() {
	const goBack = useGoBack();
	return (
		<FullHeightPage>
			<Header
				title="회원가입"
				headerLeft={<HeaderBackButton onClick={goBack} />}
			/>
			<AuthForm mode="register" />
		</FullHeightPage>
	);
}
