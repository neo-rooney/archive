# color

# 색상값

- 키워드 : red, blue 등
- RGB : 16진수 표기법과 함수표기법

## 16진수 표기법(HEX)

- #000000, #ffffff 등ㅓ

## 함수 표기법(rgb, rgba)

- rgb(0,0,0) rgba(0,0,0,0)
- rgba는 투명도까지 지정 가능

# opacity

- 요소의 불투명도를 설정
- 기본값 1
- 0.0 이상 1.0이하로 지정 가능

# background-color

- 요소의 배경색을 지정
- color 값 사용

# background-image

- 요소의 배경에 이미지를 지정

# background-repeat

- 배경 이미지의 반복 방법을 지정

## repeat

- 기본값
- 요소의 배경 영역을 채울 때까지 이미지를 반복
- 마지막 반복 이미지가 넘칠 경우 잘라낸다.

## no-repeat

- 반복 제거, 이미지 크기만큼 한번만 화면에 출력

# background-position

- 배경 이미지의 위치를 조정
- x축 방향과 y축 방향을 지정
- px, % , 키워드(top, left, bottom, right) 사용 가능

# background-origin

- 배경의 원점을 조정

## padding-box

- 배경을 안쪽 여백 박스에 상대적으로 배치합니다.
- 기본값

## border-box

- 배경을 테두리 박스에 상대적으로 배치합니다.

## content-box

- 배경을 콘텐츠 박스에 상대적으로 배치합니다.

# background-size

- 요소의 배경 이미지의 크기를 설정

## auto

- 기본값
- 이미지의 원본 크기 유지

## contatin

- 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정.
- 여백이 생길 수 있음

## cover

- 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정

# background

- 단축 속성

```css
background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #99f repeat-y fixed;
```