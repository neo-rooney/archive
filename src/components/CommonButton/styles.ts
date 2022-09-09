import styled, { css } from 'styled-components';

export interface ButtonColorType {
  primary?: boolean;
}
export interface ButtonBlockType {
  block?: boolean;
}
export interface ButtonDisabledType {
  disabled?: boolean;
}

export interface ButtonSizeType {
  large?: boolean;
  small?: boolean;
}

// export inter

export const Button = styled.button<ButtonColorType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;

  ${({ primary }) =>
    primary &&
    css`
      background: palevioletred;
      color: white;
    `}/* point-events: none */
`;
