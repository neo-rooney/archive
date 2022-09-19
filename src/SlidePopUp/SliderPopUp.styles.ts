import styled, { css } from 'styled-components';

interface popUpStyle {
  isActive?: boolean;
}

export const Block = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 300px;
  padding-bottom: 30px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 300px;
  height: 373px;
  transition: all 0.4s ease-out;
`;

export const ContentsWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: nowrap column;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  width: 300px;
  height: 300px;
`;

export const Description = styled.article`
  font-size: 18px;
  text-align: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const PaginationWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 8px;
`;

export const PaginationList = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  background-color: #d9d9d9;
  border-radius: 38.5px;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  &:hover {
    cursor: pointer;
  }
  ${({ isActive }: popUpStyle) =>
    isActive &&
    css`
      background-color: #5170bb;
      width: 40px;
      height: 10px;
    `}
`;

export const ButtonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonLeft = styled(Button)`
  color: #a0a0a0;
`;

export const ButtonRight = styled(Button)`
  background-color: #5170bb;
  color: #e6eaf1;
  border-radius: 38.5px;
  width: 120px;
  height: 48px;
`;
