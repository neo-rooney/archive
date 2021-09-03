# Form Element

# `<form>`

## 개요

정보를 제출하기 위해 사용자와 인터렉션 하기 위해 사용

## `action` 속성

### 개요

- 양식 데이터를 처리할 프로그램의 URI
- 서버로 전송하는 경우 서버의 주소 및 EndPoint

## `method` 속성

### 개요

- 양식을 제출할 때 사용할 **HTTP 메서드**.
- `post` : 양식 데이터를 요청 본문으로 전송
- `get` : 양식 데이터를 action URL과 ? 구분자 뒤에 이어 붙여서 전송

# `<label>`

## 개요

`<label>` 요소는 사용자 인터페이스 항목의 설명을 나타냅니다. 주로 `<input>` 과 함께 사용

## `<label>` 을 `<input>` 요소와 연결해야하는 이유

- 웹 접근성 : 스크린리더 등에서 어떤 입력을 해야하는가에 대해 읽어줌
- 관련 label 을 클릭해서 input 자체에 초점을 맞추거나 활성화가능, 늘어난 누를 수 있는 영역(hit area)은 터치스크린 사용자를 포함해 입력하려하는 모든 사람에게 이점

## `for` 속성

- 같은 문서 내의 `<label>` 요소로서, 레이블 가능한 form-related 요소의 `id`값
- `<label>` 의 자식요소로 `<input>`을 넣는 경우 for 속성 불필요

# `<fieldset>`

## 개요

웹 양식의 여러 컨트롤과 레이블(`<label>`)을 묶을 때 사용

- `<fieldset>`의 `display` 속성의 값은 기본적으로 `block`

## 사용 예

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
		<div>
	    <input type="radio" id="radio1">
	    <label for="radio1">1. Spirit of radio</label>
		</div>
		<div>
			<input type="radio" id="radio2">
	    <label for="radio2">2. Spirit of radio</label>
		</div>
  </fieldset>
</form>
```

## `<legend>`

### 개요

`<legend>` 요소는 부모 `<fieldset>` 콘텐츠의 설명을 나타냅니다.

- `<fieldset>`의 블록 시작 방향(대개 위쪽) 테두리 위를 가로지르는 위치에 놓입니다.

# `<input>`

## 개요

웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성

## `type`속성 - `<input>`유형

- [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input) 바로가기

## `name` 속성

- 서버로 전송 할 때 key 역할

## `placeholder` 속성

- 양식 컨트롤이 비어있을 때 양식 컨트롤에 나타나는 내용(hint)

## `autocomplete` 속성

- 자동완성기능

## `required` 속성

- Boolean
- 양식이 전송되기 위해서 반드시 입력하거나 확인이 필요한 값

## `disabled` 속성

- 양식 컨트롤이 비활성화
- 서버로 데이터 전송 될 때 포함되지 않는다.

## `readonly` 속성

- 양식 컨트롤 활성화는 되어있지만 값은 입력 할 수 없음
- 서버로 데이터 전송 될 때 포함된다.

## `min` 속성

- `type=number`에서 사용
- 최소값

## `max` 속성

- `type=number`에서 사용
- 최대값

## `step` 속성

- `type=number`에서 사용
- 스피너가 작동 할 때 증가/감소 할 크기

# `<button>`

## 개요

`<button>` 요소는 클릭 가능한 버튼

- `<button>` 요소는 `<input>` 요소보다 스타일을 적용하기 훨씬 수월합니다. `<input>`은 value 특성에 텍스트 값밖에 지정할 수 없지만, `<button>`은 내부 HTML 콘텐츠(`<em>`, `<strong>`, 심지어 `<img>`도)에 더해 `::after`와 `::before` 의사 요소를 사용하는 복잡한 렌더링도 가능합니다.

## `type` 속성

- `submit`: 버튼이 서버로 양식 데이터를 제출합니다. 지정하지 않은 경우 기본값이며, 유효하지 않은 값일 때도 사용합니다.
- `reset`: `<input type="reset">`처럼, 모든 컨트롤을 초깃값으로 되돌립니다.
- `button`: 기본 행동이 없으며 클릭했을 때 아무것도 하지 않습니다. 클라이언트측 스크립트와 연결할 수 있습니다.

# `<select>`

## 개요

옵션 메뉴를 제공하는 컨트롤

## `<option>`

- 자신이 선택됐을 때 값으로써 사용할 요소
- `value` 속성이 있는 경우에는 `value` 속성의 값이 내부적으로 선택
- `value` 속성이 없는 경우 `<option>` 태그 내부의 `text`가 선택
- `selected` 속성이 있는 `<option>` 태그가 기본 값으로 설정

## 사용 예

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second">Second Value</option>
  <option value="third">Third Value</option>
</select>
```

## `<optgroup>`

- `<optgroup>` 요소는 `<select>` 요소의 옵션을 묶는 역할

```html
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
```

# `<dataList>`

`<datalist>` 요소는 다른 컨트롤에서 고를 수 있는 추천하는 선택지를 나타내는 `<option>` 요소를 포함

- `<input>` 태그와 함꼐 사용

```html
<label for="myBrowser">아래 목록에서 브라우저를 선택하세요:</label>
<input type="text" list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

# `<textarea>`

멀티라인 일반 텍스트 편집 컨트롤

## `row` 속성

- 화면에 보여질 글의 행

## `col` 속성

- 화면에 보여질 글의 열