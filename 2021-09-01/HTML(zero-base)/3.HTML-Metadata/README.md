# Metadata

# 메타데이터의 역할

- 데이터를 설명하기 위한 데이터

---

# `<title>`

HTML <title> 요소는 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의합니다. 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시합니다.

- 북마크의 제목으로도 사용

## 예시

```html
<title>Metadata</title>
```

![title.png](Metadata%200962ca0dc83c4be4b4faca2dd6e87606/title.png)

![bookmark.png](Metadata%200962ca0dc83c4be4b4faca2dd6e87606/bookmark.png)

## 페이지 제목과 SEO

> 페이지 제목은 SEO에 큰 영향을 줍니다. 보통, 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 내곤 합니다. 검색 엔진 (en-US)이 결과 페이지의 순서를 결정하는 구성 요소 중 하나가 페이지 제목의 내용이기 때문입니다. 또한, 검색 결과에서 잠재적 독자의 주목을 끌 수 있는 최초 "훅"이 바로 제목입니다.
- MDN

---

# `<meta>`

HTML <meta> 요소는 <base>, <link>, <script>, <style>, <title>과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타냅니다.

name과 content 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있습니다. name은 이름, content는 값을 담당합니다.

- **[meta 이름 - 값 목록]**:[https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name)

## 예시

```html
<meta name="description" content="나의 웹 사이트 입니다! 방문해주셔서 감사합니다.">
```

## 문자 인코딩

charset 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언"이 됩니다.

```html
<meta charset="UTF-8">
```

## viewport

뷰포트의 초기 사이즈에 대한 힌트. 모바일 장치에서만 사용합니다.

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

---

# MINE 타입

MIME 타입이란 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘입니다: 웹에서 파일의 확장자는 별  의미가 없습니다. 그러므로, 각 문서와 함께 올바른 MIME 타입을 전송하도록, 서버가 정확히 설정하는 것이 중요합니다. 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지를 결정하기 위해 대게 MIME 타입을 사용합니다.

```html
<link rel="stylesheet" href="style/main.css" type="text/css">
```

---

# `<style>`

`<style>` 요소는 문서의 `<head>`안에 위치해야 합니다. 그러나, 일반적으로 스타일은 외부 스타일 시트에 작성하고, `<link>` 요소로 연결하는 편이 좋습니다.

## 예시

```html
<style type="text/css">
p {
  color: #26b72b;
}
</style>
<p>This text will be green. Inline styles take precedence over CSS included externally.</p>
<p style="color: blue">The <code>style</code> attribute can override it, though.</p>
```

---

# `<script>`

가능하다면 `script` 태그는 `body` 태그의 가장 아래에 위치하도록한다. 브라우저는 `script` 태그를 만나면 랜더링 하던것을 멈추고 `script` 파일을 읽기 때문에 사용자 경험에 좋지 않기 때문이다.

## 외부 script

```html
<script src="javascript.js"></script>
```

## 인라인 스크립트

```html
<script>
  alert("Hello World!");
</script>
```