import styled, { css } from 'styled-components';

export interface ContainerStyle {
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
}

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 20;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 480px;
  border-radius: 10px;
  padding: ${({ pt, pl, pb, pr }: ContainerStyle) =>
    `${pt || 0}px ${pr || 0}px ${pb || 0}px ${pl || 0}px`};
  background-color: ${(props) => props.theme.colors.white};
`;


