// src/lib/TestComponent
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import * as Styled from './Button.styles';
import theme from '../theme';
interface ButtonProps extends Styled.ButtonType {
  /**
   * 버튼 사이즈 조절
   */
  size: 'small' | 'medium' | 'large';
  /**
   * 버튼 색 조절
   */
  color: 'black' | 'white';
  /**
   * 클릭 함수
   */
  onClick?: () => void;
  /**
   * 버튼 내용
   */
  children: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  size = 'small',
  color = 'white',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Button
        className={`size--${size} text--${color}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Styled.Button>
    </ThemeProvider>
  );
};

export default Button;
