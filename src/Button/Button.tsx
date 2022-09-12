// src/lib/TestComponent
import React from 'react';
import * as Styled from './Button.styles';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  title: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary, size, title }) => {
  return <Styled.Button>{title}</Styled.Button>;
};

export default Button;
