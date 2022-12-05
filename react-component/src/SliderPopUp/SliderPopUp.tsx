import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import * as Styled from './SliderPopUp.styles';
import * as CommonStyled from '../Common/ModalFrame.styles';
import theme from '../theme';

interface popUpContentsType {
  popUpContents: {
    id: string;
    imgSrc: string;
    contents: string;
  }[];
}
const SliderPopUp: React.FC<popUpContentsType> = ({ popUpContents }) => {
  const [count, setCount] = useState<number>(1);
  const n = popUpContents.length;

  useEffect(() => {
    if (count > n) return;
    const left = ContentsWrapperRefs.current[count].offsetLeft;
    MainWrapperRefs.current.style.transform = `translateX(-${left}px)`;
  }, [count]);

  const MainWrapperRefs = useRef<any>(null);
  const ContentsWrapperRefs = useRef<any>([]);

  function onClickNext(next: number) {
    count >= n ? setCount(1) : setCount(count + next);
  }
  return (
    <ThemeProvider theme={theme}>
      <CommonStyled.Overlay>
        <CommonStyled.Container pt={51} pl={24} pr={24} pb={24}>
          <Styled.Block>
            <Styled.MainContainer>
              <Styled.MainWrapper ref={MainWrapperRefs}>
                {popUpContents.map((item, i) => (
                  <Styled.ContentsWrapper
                    key={item.id}
                    ref={(el) => (ContentsWrapperRefs.current[i + 1] = el)}
                  >
                    <Styled.ImageWrapper src={item.imgSrc} alt={'logo'} />
                    <Styled.Description
                      dangerouslySetInnerHTML={{ __html: item.contents }}
                    ></Styled.Description>
                  </Styled.ContentsWrapper>
                ))}
              </Styled.MainWrapper>
            </Styled.MainContainer>
          </Styled.Block>
          <Styled.PaginationContainer>
            <Styled.PaginationWrapper>
              {Array.from({ length: n }, (v, i) => i + 1).map((v) => (
                <Styled.PaginationList
                  key={`slider_${v}`}
                  isActive={count === v ? true : false}
                  onClick={() => setCount(v)}
                ></Styled.PaginationList>
              ))}
            </Styled.PaginationWrapper>
          </Styled.PaginationContainer>
          <Styled.ButtonWrapper>
            <Styled.ButtonLeft>그만 볼게요.</Styled.ButtonLeft>
            <Styled.ButtonRight onClick={() => onClickNext(1)}>
              다음
            </Styled.ButtonRight>
          </Styled.ButtonWrapper>
        </CommonStyled.Container>
      </CommonStyled.Overlay>
    </ThemeProvider>
  );
};

export default SliderPopUp;
