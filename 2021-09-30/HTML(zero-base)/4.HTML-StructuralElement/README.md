# 구조를 나타내는 요소

# 컨테이너

## `<div>`

`<div>` 요소는 플로우 콘텐츠를 위한 통용 컨테이너입니다. CSS로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다. `<div>` 요소는 "순수" 컨테이너로서 아무것도 표현하지 않습니다.대신 다른 요소 여럿을 묶어 `class`나 `id` 속성으로 꾸미기 쉽도록 돕거나, 문서의 특정 구역이 다른 언어임을 표시(lang 속성 사용)하는 등의 용도로 사용할 수 있습니다.

## `<span>`

`<span>` 요소는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다. 스타일을 적용하기 위해서, 또는 lang 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다. 적절한 의미를 가진 다른 요소가 없을 때에만 사용해야 합니다. 

`<span>`은 `<div>`와 매우 유사하지만, `<div>`는 블록 레벨 요소인 반면 `<span>`은 인라인 요소입니다

# 시멘틱 웹이란

## 시멘틱(Semantic)이란

Semantic이란 의미의, 의미론적인 이라는 뜻이다. 즉, 요소의 의미를 고려하여 구조를 설계하고 코드를 작성하는 것을 말한다.

## 시멘틱 코드 장점

- SEO 최적화
- 웹 접근성 최적화
- 협업에 용이

## 시맨틱 코드 예

```html
<body>
  <header>Header</header>
  <nav>Navigation</nav>
  <main>
    <article>Contents</article>
    <aside>Slide Bar</aside>
  </main>
  <footer>Footer</footer>
</body>
</html>
```

# `<header>`

## 개요

`<header>` 요소는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.

다른 `<header>` 또는 `<footer>`가 자손으로 올 수 없습니다.

## 사용 예

### 페이지 제목

```html
<header>
  <h1>Main Page Title</h1>
</header>
```

### 글 제목

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
</article>
```

# `<footer>`

## 개요

`<footer>` 요소는 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.

다른 `<header>` 또는 `<footer>`가 자손으로 올 수 없습니다.

## 사용 예

```html
<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
```

# `<Nav>`

## 개요

`<nav>` 요소는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.

## 사용 예

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

# `<aside>`

## 개요

`<aside>` 요소는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.

## 사용 예

- 다음 예제는 글 내의 문단을 <aside>로 표시합니다. 해당 문단은 글의 주제와 간접적으로만 연결되어 있습니다.

```html
<article>
  <p>
    디즈니 만화영화 <em>인어 공주</em>는
    1989년 처음 개봉했습니다.
  </p>
  <aside>
    인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.
  </aside>
  <p>
    영화에 대한 정보...
  </p>
</article>
```

# `<main>`

## 개요

`<main>` 요소는 문서 `<body>`의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.

`<main>` 는 문서내에서 유일해야합니다.

Internet Explorer 11 이하를 지원할 땐 `<main>` 요소에 "main" ARIA (en-US) 역할을 명시해 접근성을 확보하는 것이 좋습니다.

```html
<!-- Internet Explorer 11 이하 -->
<main role="main">
  ...
</main>
```

## 사용 예

```html
<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>These bright red apples are the most common found in many
    supermarkets.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for
    apple pies.</p>
    <p>... </p>
    <p>... </p>
  </article>

</main>
```

# `<aticle>`

## 개요

`<article>` 요소는 문서, 페이지, 애플리케이션, 또는 사이트 안에서 **독립적으로 구분해 배포하거나 재사용할 수 있는 구획**을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다.

각각의 `<article>`을 식별할 수단이 필요합니다. 주로 제목(`<h1>`-`<h6>`) 요소를 `<article>`의 자식으로 포함하는 방법을 사용합니다.

## 사용 예

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.
    </p>
  </footer>
</article>
```

# `<section>`

## 개요

`<section>` 요소는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 `<section>`은 제목을 포함하지만, 항상 그런 것은 아닙니다.

요소의 콘텐츠를 외부와 구분하여 단독으로 묶는 것이 나아보인다면 <article> 요소가 더 좋은 선택일 수 있습니다.

## 사용 예

```html
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>

<section>
    <h2>Criteria</h2>
    <p>There are many different criteria to be considered when choosing an Apple — size, color, firmness, sweetness, tartness...</p>
</section>
```