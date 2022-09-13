// src/lib/TestComponent
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styled from './Button.styles';
import theme from '../theme';
interface ButtonProps extends Styled.ButtonType {
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Button text color?
   */
  color: 'black' | 'white';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button contents
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
