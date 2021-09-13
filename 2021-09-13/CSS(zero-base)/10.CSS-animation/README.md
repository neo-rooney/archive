# animation

# 개요

다수의 스타일을 전환하는 애니메이션을 적용

- 단축속성
- <time> 형식의 값을 사용하는것이 `animation-duration`과 `animation-delay` 이렇게 2개이므로 <time> 형식의 값이 2개인 경우 언제나 앞에 있는 것이 `animation-duration`

## 초기값

- [animation-name (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name): `none`
- `[animation-duration](https://developer.mozilla.org/ko/docs/Web/CSS/animation-duration)`: `0s`
- [animation-timing-function (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function): `ease`
- `[animation-delay](https://developer.mozilla.org/ko/docs/Web/CSS/animation-delay)`: `0s`
- [animation-iteration-count (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count): `1`
- `[animation-direction](https://developer.mozilla.org/ko/docs/Web/CSS/animation-direction)`: `normal`
- `[animation-fill-mode](https://developer.mozilla.org/ko/docs/Web/CSS/animation-fill-mode)`: `none`
- [animation-play-state (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state): `running`

# @keyframs

## 개요

개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 CSS 애니메이션 과정의 중간 절차를 제어할 수 있게 합니다. 이 룰은 브라우저가 자동으로 애니메이션을 처리하는 것 보다 더 세밀하게 중간 동작들을 제어할 수 있습니다.

## 구문

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
```

# animation-name

## 개요

`keyframes`의 이름

## keyframes 이름 규칙

- 대소문자 구별
- a to z , 0 ~ 9, underscores (_), dashes (-) 로만 작명
- `none`, `unset`, `initial`, 또는 `inherit`로 이름 지정하면 안된다.

# animation-duration

## 개요

애니매이션이 한 사이클을 완료하는데 걸리는 시간

- 초(s) 또는 밀리 초 (ms)로 지정
- 0으로 지정한 경우 애니메이션 동작하지 않음
- 음수로 지정한 경우 0으로 지정한것과 같이 취급

# animation-delay

## 개요

애니메이션이 시작할 시점을 지정

- 초(s) 또는 밀리 초 (ms)로 지정
- 0으로 지정한 경우 즉시 시작
- 음수로 지정한 경우 즉시 시작하지만 애니메이션 주기의 도중에 시작. 예를 들어 애니메이션 지연 시간으로 -1s를 지정하면 애니메이션이 즉시 시작되지만 애니메이션 시퀀스의 1초부터 시작

# animation-timing-function

## 개요

애니메이션의 가속도를 지정

# animation-iteration-count

## 개요

애니메이션의 반복 횟수를 지정

- 초기값은 1
- 숫자로 횟수 지정 가능
- 소수점 사용 가능(예 1.5 는 1번 재생 후 2번째는 반만 재생 후 끝남)
- `infinite` 를 지정하면 영원히 애니메이션 재생

# animation-direction

애니메이션이 앞으로, 뒤로 또는 앞뒤로 번갈아 재생되어야하는지 여부를 지정

**`normal`**

- 애니메이션은 매 사이클마다 정방향으로 재생
- 순환 할 때마다 애니메이션이 시작 상태로 재설정되고 다시 시작
- 기본값

**`reverse`**

- 애니메이션은 매 사이클마다 역방향으로 재생
- 즉순환 할 때마다 애니메이션이 종료 상태로 재설정되고 다시 시작
- 애니메이션 단계가 거꾸로 수행되고 타이밍 기능 또한 반대(예를 들어, `ease-in` 타이밍 기능은  `ease-out`형태로 변경)

**`alternate`**

- 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 정방향으로 진행
- 사이클이 짝수인지 홀수인지를 결정하는 카운트가 하나에서 시작

**`alternate-reverse`**

- 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 역방향으로 진행
- 사이클이 짝수인지 홀수인지를 결정하는 카운트가 하나에서 시작

# animation-play-state

애니메이션의 재생 상태를 지정

`paused`

- 애니메이션의 동작을 일시정지

`running`

- 애니메이션이 동작

# animation-fill-mode

## 개요

CSS 애니메이션이 실행 전과 후에 대상에 스타일을 적용하는 방법을 지정

**`none`**

- 애니메이션은 실행되지 않을 때 대상에 스타일을 적용하지 않음
- 기본값

**`forwards`**

- 대상은 실행 된 애니메이션의 마지막 `keyframe`에 의해 설정된 계산 된 값을 유지

**`backwards`**

- 애니메이션은 대상에 적용되는 즉시 첫 번째 관련 `keyframe` 에 정의 된 값을 적용하고  `animation-delay` 기간 동안 이 값을 유지
- 첫 번째 관련 키프레임은 `animation-direction`의 값에 따라 달라짐

**`both`**

- 애니메이션은 앞뒤 양쪽 모두의 규칙을 따르므로 애니메이션 속성이 양방향으로 확장