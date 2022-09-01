import styled from 'styled-components';
import LableInput from './LabelInput';

interface Props {
	mode: 'login' | 'register';
}

function AuthForm({ mode }: Props) {
	return (
		<Block>
			<InputGroup>
				<LableInput label="아이디" />
				<LableInput label="비밀번호" />
			</InputGroup>
		</Block>
	);
}

const Block = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export default AuthForm;
