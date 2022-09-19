import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styled from './SliderPopUp.styles';
import * as CommonStyled from '../Common/ModalFrame.styles';
import theme from '../theme';
import image1 from './';

const SliderPopUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommonStyled.Overlay>
        <CommonStyled.Container pt={51}>
          <Styled.ContentsWrapper>
            <Styled.ImageWrapper src={image1} alt={'logo'} />
          </Styled.ContentsWrapper>
        </CommonStyled.Container>
      </CommonStyled.Overlay>
    </ThemeProvider>
  );
};

export default SliderPopUp;
