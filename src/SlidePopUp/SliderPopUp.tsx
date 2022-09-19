import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styled from './SliderPopUp.styles';
import * as CommonStyled from '../Common/ModalFrame.styles';
import theme from '../theme';

interface popUpContentsType {
  popUpContents: {
    imgSrc: string;
    contents: string;
  }[];
}
const SliderPopUp: React.FC<popUpContentsType> = ({ popUpContents }) => {
  const [count, setCount] = useState<number>(0);
  return (
    <ThemeProvider theme={theme}>
      <CommonStyled.Overlay>
        <CommonStyled.Container pt={51} pl={24} pr={24} pb={24}>
          <Styled.MainContainer>
            <Styled.MainWrapper>
              {popUpContents.map((item) => (
                <Styled.ContentsWrapper>
                  <Styled.ImageWrapper src={item.imgSrc} alt={'logo'} />
                  <Styled.Description
                    dangerouslySetInnerHTML={{ __html: item.contents }}
                  ></Styled.Description>
                </Styled.ContentsWrapper>
              ))}
            </Styled.MainWrapper>
          </Styled.MainContainer>
          <Styled.PaginationContainer>
            <Styled.PaginationWrapper>
              <Styled.PaginationList isActive></Styled.PaginationList>
              <Styled.PaginationList></Styled.PaginationList>
              <Styled.PaginationList></Styled.PaginationList>
            </Styled.PaginationWrapper>
          </Styled.PaginationContainer>
          <Styled.ButtonWrapper>
            <Styled.ButtonLeft>그만 볼게요.</Styled.ButtonLeft>
            <Styled.ButtonRight>다음</Styled.ButtonRight>
          </Styled.ButtonWrapper>
        </CommonStyled.Container>
      </CommonStyled.Overlay>
    </ThemeProvider>
  );
};

export default SliderPopUp;
