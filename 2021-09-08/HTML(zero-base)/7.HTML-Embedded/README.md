# Embedded

# `<img>`

`<img>` 요소는 문서에 이미지를 넣습니다.

## `src` 속성

- **필수**, 포함하고자 하는 이미지로의 경로를 지정

## `alt` 속성

- 스크린 리더가 alt의 값을 읽어 사용자에게 이미지를 설명(웹 접근성)
- 이미지를 표시할 수 없는 경우에도 이 속성의 값 화면에 출력

## `title` 속성

- 이미지에 마우스 올렸을 때 등장 할 tooltip 지정 가능

## `width` , `height`속성

- 이미지의 픽셀 기준 너비. 단위 없는 정수
- width, heigth 중 하나만 입력한 경우 기존 이미지 비율대로 줄거나 커짐

## 웹에서 사용하는 이미지의 유형

- 브라우저에 따라 지원하는 이미지 확장자가 다르다.(사용 할 수 있는지 확인)

![image.png](Embedded%20d8513b2f1a3d449f9181a8ae9c9b4779/image.png)

## `srcset` 속성

- 반응형 이미지를 만들기 위해 사용하는 이미지의 집합
- 사용자의 viewport에 따라 이미지 집합 중 가장 적당한 이미지가 화면에 보여진다.
- 너비 서술자(양의 정수와 바로 뒤의 'w' 문자)
- 픽셀 밀도 서술자(양의 실수와 바로 뒤의 'x' 문자)

```html
<img src="favicon72.png"
     alt="MDN logo"
     srcset="favicon144.png 2x">
```

## `sizes` 속성

- 사용자의 viewport에 따라 이미가 지정한 너비로 화면에 그려짐

```html
<img src="clock-demo-200px.png"
     alt="Clock"
     srcset="clock-demo-200px.png 200w,
             clock-demo-400px.png 400w"
     sizes="(min-width: 600px) 200px, 50vw">
```

# `<video>`

## 개요

`<video>` 요소는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입

`<video></video>` 태그 안의 콘텐츠는 브라우저가 <video> 요소를 지원하지 않을 때 보여집니다.

```html
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Sorry, your browser doesn't support embedded videos
</video>
```

## `src` 속성

- **필수**, 포함하고자 하는 비디오의 경로를 지정

## `controls` 속성

- 이 속성이 존재하면, 소리 조절(volume), 동영상 탐색(seek), 일시 정지(pause)/재시작(resume)을 할 수 있는 컨트롤러를 제공

## `autoplay` 속성

- 부울(boolean) 속성. 이 값이 설정되면, 데이터 로딩이 완료되지 않더라도 재생 가능한 시점에 자동으로 재생이 시작
- 사운드가 있으면 브라우저에 의해 막힐 수 있다. 따라서 사운드를 없애줘야한다.

## `muted` 속성

- 비디오에 포함되어 있는 오디오의 기본 설정을 나타내는 부울 속성입니다. 설정하면 오디오가 나오지 않습니다. 기본 값은 false이며 이는 비디오가 재생되면 오디오도 같이 재생됨을 의미합니다.

## `poster` 속성

- 사용자가 동영상을 재생하거나 탐색하기 전까지 출력되는 포스터 프레임 주소입니다. 이 속성이 명시되지 않으면, 첫 번째 프레임이 사용 가능하게 될때까지 아무것도 출력되지 않다가, 가능하게 되면 첫 번째 프레임을 포스터 프레임으로 출력합니다.

# `<audio>`

<audio> 요소는 문서에 소리 콘텐츠를 포함할 때 사용합니다

- 비디오태그와 거의 동일

# `<canvas>`

`<canvas>` 요소는 캔버스 스크립팅 API 또는 WebGL API와 함께 사용해 그래픽과 애니메이션을 그릴 수 있습니다.

# `<ifram>`

`<iframe>` 요소는 중첩 브라우징 맥락을 나타내는 요소로, 현재 문서 안에 다른 HTML 페이지를 삽입