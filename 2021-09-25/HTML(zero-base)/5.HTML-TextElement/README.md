# Text Element

# 제목 `<h1>` - `<h6>`

## 개요

`<h1>`–`<h6>` 요소는 6단계의 구획 제목을 나타냅니다. 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다.

- 웹 브라우저가 `<h1>` - `<h6>` 태그를 가지고 목차를 만드는 등의 작업을 수행 할 수 있음
- `<h1>`로 시작해서, `<h2>`, 순차적으로 기입하도록 권고
- 글씨 크기를 위해 제목 태그를 사용 지양. 대신 CSS의 `font-size` 속성을 사용
- 페이지 당 하나의 `<h1>`만 사용 권고

## 사용 예

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

![heading.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/heading.png)

# 본문 `<p>`

## 개요

`<p>` 요소는 하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다.

문단은 **블록 레벨 요소**이며, 자신의 닫는 태그(`</p>`) 이전에 다른 블록 레벨 태그가 분석되면 자동으로 닫힙니다. 따라서 `<p>` 태그 내에서는 **블록 레벨 요소** 사용을 지양해야 합니다.

- `<p>`태그가 연속되는 경우 `<p>` 태그 사이에 여백이 생긴다. 이는 브라우저의 기본 스타일로 `<p>` 태그 컨탠츠의 줄간격이랑 동일하다.

## 접근성 고려 사항

- 스크린 리더 등 보조 기술은 다음 문단으로 넘어갈 수 있는 단축키 등을 제공하므로, 시각적 매체의 여백이 사용자의 빠른 콘텐츠 탐색을 돕는 것과 같은 효과를 얻을 수 있음( 웹 접근성 향상 )
- 빈 `<p>` 요소를 사용해 문단 사이에 여백을 추가하면 스크린 리더 사용자에게 부정적인 경험을 줄 수 있음(아무런 내용이 없기 때문에 혼란야기)

## 사용 예

```html
<p>첫 번째 문단입니다.
  첫 번째 문단입니다.
  첫 번째 문단입니다.
  첫 번째 문단입니다.</p>
<p>두 번째 문단입니다.
  두 번째 문단입니다.
  두 번째 문단입니다.
  두 번째 문단입니다.</p>
```

![p.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/p.png)

# 본문 `<br>`

## 개요

`<br>` 요소는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.

## 접근성 고려사항

- 문단 구분을 `<br>`로 하는건 나쁜 사례일 뿐만 아니라 스크린 리더를 사용해 탐색하는 사용자에게도 문제
- `<p>` 요소와 함께 CSS `margin` 속성 등을 조합해 간격을 조절 권고

## 사용 예

```html
<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou<br>
    Hardly a breath;<br>
    The birds are asleep in the trees:<br>
    Wait, soon like these<br>
    Thou too shalt rest.
</p>
```

# 본문 `<blockquote>`

## 개요

`<blockquote>` 요소는 안쪽의 텍스트가 **긴 인용문**임을 나타냅니다. 주로 **들여쓰기**를 한 것으로 그려집니다.

`<blockquote>`은 **블록** 요소

- cite 속성 사용 가능 - 화면에 보이진 않음

`<blockquote cite="[https://www.huxley.net/bnw/four.html](https://www.huxley.net/bnw/four.html)">`

## 사용 예

```html
<body>
  <h2>p Element</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam placeat aspernatur rerum eius quas voluptas explicabo cum hic perferendis, odit nobis ex molestias, doloribus aliquam. Repudiandae iste illo quasi.
  </p>
  <h2>blockquote Element</h2>
  <blockquote>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad corporis velit beatae commodi sequi exercitationem quasi voluptate, aliquid, reprehenderit ut ducimus consequuntur rerum veniam quisquam necessitatibus et iusto, nesciunt officia?
  </blockquote>
  <h2>q Element</h2>
  <q>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate provident repudiandae ratione temporibus maxime tempora rem? Natus, adipisci itaque aut id consequatur asperiores assumenda quo labore ex animi placeat.
  </q>
</body>
```

![quote.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/quote.png)

# 본문 `<q>`

## 개요

`<q>`요소는 둘러싼 텍스트가 **짧은 인라인 인용문**이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 **따옴표**를 붙여 표현합니다. `<q>`는 줄 바꿈이 없는 짧은 경우에 적합합니다.

`<blockquote>`은 **인라인** 요소

- cite 속성 사용 가능 - 화면에 보이진 않음

`<q cite="[https://www.huxley.net/bnw/four.html](https://www.huxley.net/bnw/four.html)">`

## 사용 예

```html
<body>
  <h2>p Element</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam placeat aspernatur rerum eius quas voluptas explicabo cum hic perferendis, odit nobis ex molestias, doloribus aliquam. Repudiandae iste illo quasi.
  </p>
  <h2>blockquote Element</h2>
  <blockquote>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad corporis velit beatae commodi sequi exercitationem quasi voluptate, aliquid, reprehenderit ut ducimus consequuntur rerum veniam quisquam necessitatibus et iusto, nesciunt officia?
  </blockquote>
  <h2>q Element</h2>
  <q>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate provident repudiandae ratione temporibus maxime tempora rem? Natus, adipisci itaque aut id consequatur asperiores assumenda quo labore ex animi placeat.
  </q>
</body>
```

![quote.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/quote.png)

# 본문 `<pre>`

## 개요

- **preformatted**의 준말

`<pre>` 요소는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 **그대로** 표현합니다. 텍스트는 보통 **고정폭 글꼴**을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다.

- 고정폭 글꼴 : 글자의 간격이 동일하게 적용되는 글꼴 (ex AAAAA와 IIIII는 폭이 다른데 `pre` 태그를 사용하면 폭이 동일하게 나옴, pre태그를 쓰면 글꼴이 이상하게 나오는 이유)

## 사용 예

```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

![ptag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/ptag.png)

# 본문 `<figure>`, `<figcaption>`

## 개요

`<figure>` 요소는 독립적인 콘텐츠를 표현합니다. `<figcaption>` 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.

## 사용 예

```html
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```

![figure.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/figure.png)

# 본문 `<hr>`

## 개요

`<hr>` 요소는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다. 역사적으로 `<hr>`은 가로줄로 표현했습니다. 시각적 브라우저에서도 가로줄로 그려질 수 있지만, 이제 시각 표현에 그치지 않고 의미를 가지게 됐습니다. 따라서 가로줄을 그리고 싶다면 적절한 CSS를 사용해야 합니다.

## 사용 예

```html
<p>
This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.
</p>

<hr>

<p>
This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
</p>
```

![hrtag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/hrtag.png)

# 본문 `<abbr>`

## 개요

`<abbr>` 요소는 준말 또는 머리글자를 나타냅니다. 선택 속성인 `title`을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. `title` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다.

## 사용 예

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big
time.</p>
```

![abbr.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/abbr.png)

# 본문 `<address>`

## 개요

`<address>` 요소는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다.

## 사용 예

```html
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

# 본문 `<cite>`

## 개요

`<cite>` 요소는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.

## 사용 예

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

# 본문 `<bdo>`

## 개요

`<bdo>` 요소는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다.

## 속성

- `ltr`: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냅니다.
- `rtl`: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냅니다.

## 사용 예

```html
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```

![bdo.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/bdo.png)

# 포메팅 `<b>`

## 개요

`<b>`요소는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다.

## 사용 예

```html
p>
  This article describes several <b class="keywords">text-level</b> elements.
  It explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the <b>element, likely in bold</b>.
```

![btag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/btag.png)

# 포메팅 `<strong>`

## 개요

`<strong>` 요소는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다.

## `<b>` 태그와 차이점

- 스크린리더에서 **`<b>`**태그는 그냥 읽히지만 **`<strong>`**태그는 강조해서 읽어준다.

## 사용 예

```html
<p>Before proceeding, <strong>make sure you put on your safety goggles</strong>.</p>
```

![strong.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/strong.png)

# 포메팅 `<i>`

## 개요

`<i>` 요소는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다.

## 사용 예

```html
<p>라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.</p>
```

![itag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/itag.png)

# 포메팅 `<em>`

## 개요

<em> 요소는 텍스트의 강세를 나타냅니다. <em> 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다.

## `<i>`태그와의 차이점

- 스크린리더에서 **`<i>`**태그는 그냥 읽히지만 **`<em>`**태그는 강조해서 읽어준다.

## 사용 예

```html
<p>
  과거에 <em>block-level</em>이라 불렸던
  콘텐츠는 HTML 5부터 <em>flow</em> 콘텐츠라고
  말합니다.
</p>
```

![emtag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/emtag.png)

# 포메팅 `<mark>`

## 개요

`<mark>` 요소는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.

- 대부분의 스크린 리더는 기본값에서 `<mark>` 요소의 존재를 표현하지 않습니다.

## 사용 예

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a
  hidden base, have won their first victory against the evil
  Galactic Empire. During the battle, <mark>Rebel spies managed
  to steal secret plans</mark> to the Empire’s ultimate weapon,
  the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

![markTag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/markTag.png)

# 포메팅 `<small>`

## 개요

small> 요소는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다. 기본 상태에서 <small>은 자신의 콘텐츠를 한 사이즈 작은 글꼴(small에서 x-small 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없습니다.

## 사용 예

```html
<p>This is the first sentence.
 <small>This whole sentence is in small letters.</small>
</p>
```

![smallTag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/smallTag.png)

# 포메팅 `<sub>`

## 개요

`<sub>` 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 합니다.

## 사용 예(ex $2_4$)

```html
<span>2<sub>4</sub></span>
```

# 포메팅 `<sup>`

## 개요

`<sup>` 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다. 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 합니다.

## 사용 예(ex $2^4$)

```html
<span>2<sup>4</sup></span>
```

# 포메팅 `<del>` , `<ins>`

## 개요

`<del>` 요소는 문서에서 제거된 텍스트의 범위를 나타냅니다. 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. `<ins>` 요소로 추가된 텍스트를 나타낼 수 있습니다.

## 사용 예

```html
<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

![deltag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/deltag.png)

# 포메팅 `<code>`

## 개요

`<code>` 요소는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다. 기본 스타일은 사용자 에이전트의 고정폭 글씨체입니다.

## 사용 예

```html
<p>함수 <code>selectAll()</code>는 입력 필드의 모든 텍스트를 선택하므로,
사용자가 복사 혹은 삭제를 손쉽게 할 수 있습니다.</p>
```

![codetag.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/codetag.png)

포메팅 `<kbd>`

## 개요

`<kbd>` 요소는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다. 관례에 따라 사용자 에이전트의 고정폭 글꼴로 표시하지만, HTML 표준은 그런 점을 강제하지 않습니다.

## 사용 예

```html
<p><kbd>help mycommand</kbd> 명령어를 입력해 "mycommand" 명령에 대한 문서를 확인하세요.</p>
```

![kbd.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/kbd.png)

# `<a>` 와 하이퍼링크

## 개요

`<a>` 요소(앵커 요소)는 `href`특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. `<a>` 안의 콘텐츠는 링크 목적지의 설명을 나타내야 합니다.

## 속성

- `href` : 하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 을 사용할 수 있습니다.
    1. `tel`: URL을 사용하는 전화번호
    2. `mailto`: URL을 사용하는 이메일 주소
    3. 프로젝트내의 다른 HTML 파일의 경로
- `target` : 링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, <iframe>의 이름이나 특정 키워드입니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.
    1. `_self`: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
    2. `_blank`: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.

    `target`을 사용할 때, `rel="noreferrer"`를 추가해 window.opener API의 악의적인 사용을 방지하는걸 고려하세요. 최근의 브라우저(Firefox 79+ 등)에서는 `target="_blank"`를 지정하면 `rel="noopener"`를 적용한 것과 같은 동작을 합니다.

## 사용 예

```html
<a href="https://www.mozilla.com">
  Mozilla
</a>

<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
<a href="tel:+49.157.0156">+49 157 0156</a>
```

# 엔티티(Entity)

## 개요

HTML에서 문자 `<`,`>`, `"`및 `&`는 특수 문자입니다. 이들은 HTML 구문 자체의 일부입니다. 따라서 이들을 표현하기 위해서는 Entity를 사용해야합니다.

![entity.png](Text%20Element%2036c98929db304c718c489e7fd81a0a41/entity.png)
`&npsp;` : spacing을 표현 할 때 사용