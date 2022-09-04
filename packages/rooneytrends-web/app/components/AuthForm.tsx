import styled from 'styled-components';
import Button from './Button';
import LableInput from './LabelInput';
import QuestionLink from './QuestionLin';

interface Props {
	mode: 'login' | 'register';
}

const authDescription = {
	login: {
		usernamePlaceHolder: '아이디를 입력하세요',
		passwordPlaceHolder: '비밀번호를 입력하세요',
		buttonText: '로그인',
		actionText: '회원가입',
		question: '계정이 없으신가요?',
		auctionLink: '/register',
	},
	register: {
		usernamePlaceHolder: '5~20자 사이의 영문 소문자, 숫자 입력',
		passwordPlaceHolder: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력',
		buttonText: '회원가입',
		actionText: '로그인',
		question: '계정이 이미 있으신가요?',
		auctionLink: '/login',
	},
} as const;

function AuthForm({ mode }: Props) {
	const {
		usernamePlaceHolder,
		passwordPlaceHolder,
		buttonText,
		actionText,
		question,
		auctionLink,
	} = authDescription[mode];
	return (
		<Block>
			<InputGroup>
				<LableInput label="아이디" placeholder={usernamePlaceHolder} />
				<LableInput label="비밀번호" placeholder={passwordPlaceHolder} />
			</InputGroup>
			<ActionsBox>
				<Button layoutMode="fullWidth">{buttonText}</Button>
				<QuestionLink name={actionText} question={question} to={auctionLink} />
			</ActionsBox>
		</Block>
	);
}

const Block = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	flex: 1;
	justify-content: space-between;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const ActionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
`;

export default AuthForm;
