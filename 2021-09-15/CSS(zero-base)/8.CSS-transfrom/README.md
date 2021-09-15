# trasform

# 개요

`transform` 속성으로 요소에 **회전**, **크기 조절**, **기울이기**, **이동 효과**를 부여할 수 있습니다. `transform`은 **CSS 시각적 서식 모델**의 좌표 공간을 변경합니다.

- 기본값은 `none`
- `transform` 속성에 여러개의 값을 할당 할 수 있는데 이런 경우에는 **맨 오른쪽 값부터 왼쪽**으로 하나씩 순서대로 적용된다.

# scale - 크기

- 2D 평면의 크기를 조절, 3D 입체를 조절하려면 `scale3d()`가 별도로 있으므로 이것을 사용
- 요소가 차지하는 **공간의 크기는 그대로 유지**되지만, 요소 자체의 크기가 줄거나 커진다.
- x축, y축을 각각 입력 할 수 있다.

```css
transform: scale(2, 0.5); /* Equal to scaleX(2) scaleY(0.5) */
```

# rotate

- 2D 평면의 회전을 조절, 3D 입체를 조절하려면 `rotate3d()`가 별도로 있으므로 이것을 사용
- `<angle>` 자료형 을 사용한다.
    1. deg : 각도
    2. rad : radians
    3. turn : 1turn 은 한바퀴
- 요소가 차지하는 **공간의 크기는 그대로 유지**

# translate

- 2D 평면의 위치좌표를 조절, 3D 입체를 조절하려면 `translate3d()`가 별도로 있으므로 이것을 사용
- 요소가 차지하는 **공간의 크기는 그대로 유지**
- x축, y축을 각각 입력 할 수 있다.

```css
transform: translate(10px, 5px); /* Equal to: translateX(10px) and translateY(5px) */
transform: translate(10px); /* Equal to: translateX(10px) or translate(10px, 0) */
```

# skew

- 2D 평면의 기울기를 조절, 3D 입체를 조절하려면 `shew3d()`가 별도로 있으므로 이것을 사용
- `<angle>` 자료형 을 사용한다.
- 요소가 차지하는 **공간의 크기는 그대로 유지**
- x축, y축을 각각 입력 할 수 있다.

```css
transform: skew(10deg , 0.25turn); /* Equal to skewX(10deg) and skewY(0.25turn)*/
transform: skew(10deg); /* Equal to skewX(10deg) or skew(10px, 0)*/
```

# transform-origin

`transform`의 기준점을 변경하는데 사용

- 기본값 `center`
- `top`, `right`, `bottom`, `left` , `number 자료형` 사용 가능