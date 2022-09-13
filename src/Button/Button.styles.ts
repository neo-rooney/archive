import styled, { css } from 'styled-components';

export interface ButtonType {
  /**
   * Make buttons look inactive by adding the disabled prop to.
   */
  disabled?: boolean;
}

export const Button = styled.button`
  display: inline-flex;
  background: transparent;
  border-radius: 4px;
  &.size--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.size--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.size--large {
    font-size: 16px;
    padding: 12px 24px;
  }

  ${({ disabled }: ButtonType) =>
    disabled
      ? css`
          &.text--black {
            background-color: inherit;
            color: ${(props) => props.theme.colors.black};
            border: ${(props) => css`2px solid ${props.theme.colors.grey}`};
            color: ${(props) => props.theme.colors.grey};
            point-events: none;
          }
          &.text--white {
            background-color: ${(props) => props.theme.colors.grey};
            border: ${(props) => css`2px solid ${props.theme.colors.grey}`};
            color: ${(props) => props.theme.colors.white};
            point-events: none;
          }
        `
      : css`
          &.text--black {
            background-color: inherit;
            border: ${(props) => css`2px solid ${props.theme.colors.black}`};
            color: ${(props) => props.theme.colors.black};
            &:hover,
            &:focus {
              cursor: pointer;
              background-color: ${(props) => props.theme.colors.grey};
            }
          }
          &.text--white {
            background-color: ${(props) => props.theme.colors.black};
            border: ${(props) => css`2px solid ${props.theme.colors.black}`};
            color: ${(props) => props.theme.colors.white};
            &:hover,
            &:focus {
              cursor: pointer;
              background-color: ${(props) => props.theme.colors.grey};
            }
          }
        `}
`;
