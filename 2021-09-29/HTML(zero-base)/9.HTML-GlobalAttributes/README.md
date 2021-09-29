# Global Attribute

# `id`

`id` 전역 특성은 문서 전체에서 유일한 고유식별자(ID)를 정의합니다. 고유식별자의 목적은 프래그먼트 식별자를 사용해 요소를 가리킬 때와 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함입니다.

- 문서 전체에서 **유일**해야 한다.
- `id` 특성의 값이 공백(스페이스나 탭 등)을 포함해서는 안됌
- 하나의 요소는 하나의 `id`만

ASCII 문자, 숫자, '_', '-' 및 '.'를 제외한 문자는 HTML 4에서 허용하지 않았으므로 호환성 문제가 발생할 수 있습니다. 이런 제한은 HTML 5에서는 해제되었으나, 호환성을 위해, ID는 위의 문자로 시작해야 합니다.

# `class`

class 전역 특성은 공백으로 구분한 요소 클래스의 목록으로, **대소문자를 구분하지 않습니다.** 클래스는 CSS나 JavaScript에서 클래스 선택자나 DOM 메서드의`document.getElementsByClassName()` 과 같은 메서드를 통해 요소에 접근할 수 있는 방법입니다.

- `class`는 문서 내 중복으로 사용 가능
- 하나의 요소에 여러개의 `class` 가능

# `style`

인라인 스타일을 적용하기 위해 사용하는 속성

스타일은 외부 CSS파일에 작성하는 것이 권장, javascript 로 일시적으로 스타일을 적용 하는 경우 등 제한적인 경우에만 사용하길 권장

# `title`

요소와 관련된 추가 정보를 제공하는 툴팁(tooltip)을 생성하는 속성

- 보조 기술을 위해 `[<iframe>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe)` 요소에 이름 붙이기
- 진짜 `[<label>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label)`을 표시하지 못할 때에 대비해 `[<input>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)` 요소에 프로그래밍을 통한 레이블 추가하기
- `[<table>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/table)` 요소 컨트롤에 레이블 추가하기

## 특성 상속

- 요소가 title 특성을 가지고 있지 않을 땐 부모 요소로부터 상속합니다. 부모 요소 또한 자신의 부모로부터 상속할 수 있습니다.

# `lang`

`<html lang="ko">`라면 해당 문서가 한국어로 작성된 문서임을 의미, 일부 태그에 별도 `lang` 속성 지정 가능

# `data`

사용자가 지정한 커스텀 데이터를 html 요소에 지정하는 속성

- 어느 엘리멘트에나 data-로 시작하는 속성은 무엇이든 사용 가능

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

# `draggable`

드레그가 가능한지 여부를 나타내는 속성

`draggable`은 다음 두 값 중 하나를 가질 수 있습니다.

- `true`: 요소를 드래그 할 수 있습니다.
- `false`: 요소를 드래그 할 수 없습니다.

`draggable` 특성은 불리언이 아니고 열거형 특성이므로, true 또는 false의 지정 또한 필수입니다. 그러므로 `<img draggable>`처럼 사용할 수 없고, 올바른 사용법은 `<img draggable="false">`입니다.

- `draggable`을 지정하지 않은 경우의 기본값은 `auto`로, **브라우저 기본 동작**을 따릅니다

# `hidden`

브라우저는 hidden 속성을 설정한 요소를 렌더링 하지 않음

- 시각적으로 보여지지 않는 경우에만 사용
- 개발자 도구에서는 볼 수 있음

`hidden` 특성을 가진 요소의 CSS `display` 속성 값을 변경하면 특성으로 인한 동작을 재정의합니다. 예컨대 `display: flex`를 지정한 요소는 `hidden` 특성이 존재하더라도 화면에 보이게 됩니다.