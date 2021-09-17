# List&Table

# 목록 `<ul>` , `<ol>` , `<li>`

## 순서가 있는 목록 - `<ol>`

### 개요

`<ol>` 요소는 정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다.

### `type` 속성

항목을 셀 때 사용할 카운터 유형.

- `'a'`는 소문자 알파벳
- `'A'`는 대문자 알파벳
- `'i'`는 소문자 로마 숫자
- `'I'`는 대문자 로마 숫자
- `'1'` 는 숫자(기본값)

### `start` 속성

- 항목을 셀 때 시작할 수
- 영어 문자 "d"나 로마 숫자 "iv"부터 세려고 한다면 start="4"를 사용

### `reversed` 속성

- 목록의 순서 역전

### 사용 예

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

![oldefault.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/oldefault.png)

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Greivances</li>
  <li>Conclusion</li>
</ol>
```

![oltype.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/oltype.png)

```html
<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

![olstart.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/olstart.png)

## 순서가 없는 목록 - `<ul>`

### 개요

`<ul>` 요소는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.

### 사용 예

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

![ul.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/ul.png)

## 비정렬 목록 안의 정렬 목록

- 정렬 목록 안의 비정렬 목록도 가능

```html
<ul>
  <li>first item</li>
  <li>second item
  <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

![insidelist.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/insidelist.png)

## 목록의 항목 - `<li>`

### 개요

`<li>` 요소는 목록의 항목을 나타냅니다. 반드시 정렬 목록(`<ol>`), 비정렬 목록(`<ul>`), 혹은 메뉴(`<menu>`) 안에 위치해야 합니다. 메뉴와 비정렬 목록에서는 보통 불릿으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타냅니다.

### `value` 속성

- `<ol>` 요소 내부에서 항목의 현재 서수 값을 나타내는 정수

### 사용 예

```html
<ol>
  <li>첫번쨰</li>
  <li>두번쨰</li>
  <li value="100">세번쨰</li>
  <li>네번쨰</li>
  <li>다섯번째</li>
</ol>
```

![litag.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/litag.png)

# 정의 목록 - `<dl>` , `<dt>` , `<dd>`

## 개요

`<dl>` 요소는 설명 목록을 나타냅니다. `<dl>`은 `<dt>`로 표기한 용어와 `<dd>` 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.

## 사용 예

- 하나의 용어 - 하나의 정의 가능
- 하나의 용어 - 여러개의 정의 가능
- 여러개의 용어 - 하나의 정의 가능

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Mozilla 재단과 수 백명의
    자원봉사자가 개발한 무료
    오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  </dd>

  <!-- 다른 용어 및 정의 -->
</dl>
```

![dt.png](List&Table%20bb889687a9f34416bcf8adaf064dffe6/dt.png)

# 표

## `<tr>`

표의 행

## `<th>`

표의 행 또는 열을 대표하는 요소

### `scope` 속성

- `scope="col"`을 선언함으로써, 해당 칸이 열의 맨 위에 위치함을 설명
- `scope="row"`를 추가하면 해당 칸이 행의 맨 앞에 위치함을 설명

## `<td>`

표의 열 

## 사용 예

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">HEX</th>
    <th scope="col">HSLa</th>
    <th scope="col">RGBa</th>
  </tr>
  <tr>
    <th scope="row">Teal</th>
    <td><code>#51F6F6</code></td>
    <td><code>hsla(180, 90%, 64%, 1)</code></td>
    <td><code>rgba(81, 246, 246, 1)</code></td>
  </tr>
  <tr>
    <th scope="row">Goldenrod</th>
    <td><code>#F6BC57</code></td>
    <td><code>hsla(38, 90%, 65%, 1)</code></td>
    <td><code>rgba(246, 188, 87, 1)</code></td>
  </tr>
</table>
```

## `<thead>`

표의 Header 영역 표현

## `<tbody>`

표의 본문 영역 표현

## `<tfoot>`

표의 Footer 영역 표현

## 사용 예

```html
<table>
	<thead>
		<tr>
		  <th scope="col">Name</th>
		  <th scope="col">HEX</th>
		  <th scope="col">HSLa</th>
		  <th scope="col">RGBa</th>
		</tr>
	</thead>
	<tbody>
	  <tr>
	    <th scope="row">Teal</th>
	    <td><code>#51F6F6</code></td>
	    <td><code>hsla(180, 90%, 64%, 1)</code></td>
	    <td><code>rgba(81, 246, 246, 1)</code></td>
	  </tr>
		<tr>
	    <th scope="row">Goldenrod</th>
	    <td><code>#F6BC57</code></td>
	    <td><code>hsla(38, 90%, 65%, 1)</code></td>
	    <td><code>rgba(246, 188, 87, 1)</code></td>
	  </tr>
	</tbody>
	<tfoot>
		<tr>
			<th colspan="4">Footer</th>
	  </tr>
	</tfoot>
</table>
```

## `<caption>`

`<caption>` 요소는 표의 설명 또는 제목을 나타냅니다.

`<caption>` 요소는 `<table>` 요소의 첫 번째 자식이어야 합니다.

## 사용예

```html
<table>
  <caption>Example Caption</caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```