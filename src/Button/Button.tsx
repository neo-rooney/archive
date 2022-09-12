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
   * Button contents
   */
  title: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = 'small',
  color = 'white',
  title,
  disabled = false,
  onClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Button
        className={`size--${size} text--${color}`}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </Styled.Button>
    </ThemeProvider>
  );
};

export default Button;
