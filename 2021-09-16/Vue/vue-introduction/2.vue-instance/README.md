# 2. vue instance

vue를 사용하기 위해서는 여러 가지 방법이 있는데 javascript 파일을 추가하는 것만으로 간단하게 vue를 사용할 수 있습니다.

[공식 문서](https://kr.vuejs.org/v2/guide/index.html)에서 해당 파일을 복사해서 새로운 HTML 파일에 붙여넣기 하겠습니다.

```html
<!-- vue-instance.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Instance</title>
  </head>

  <body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </body>
</html>
```

이제 vue를 통해서 Hello world를 출력해보도록 하겠습니다.

vue를 이용하여 웹 어플리케이션을 만들 때 Vue 함수로 새로운 Vue Instance를 만드는 것부터 시작합니다.

근데 인스턴스가 뭔가요? 위키피디아에 따르면 인스턴스의 정의는 아래와 같습니다.

> 객체지향프로그래밍(OOP)에서 **인스턴스**(instance)는 해당 클래스의 구조로 컴퓨터 저장공간에서 할당된 실체를 의미한다. - [위키피디아](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))-

저는 vue 인스턴스는 **vue 를 만든 개발자가 우리가 편하게 웹 애플리케이션을 구축할 수 있도록 미리 정의한 객체**라고 이해했습니다. 프레임워크는 편하게 개발하기 위한 도구라고 했죠? 또한 그 대가로 규칙을 지켜야 한다고도 했습니다. 'vue를 이용하여서 data binding을 하려면 이런 식으로 데이터를 선언해야 돼!' 혹은 'vue에서 함수는 여기에다가 선언해' 등의 규칙을 정해놓은 게 바로 vue 인스턴스라고 생각합니다! 규칙에 맞게 개발을 진행하면 vue가 제공하는 편의 기능을 사용할 수 있는 거죠!

화면에 Hello world를 출력하기 위해 아래와 같이 vue 인스턴스를 정의했습니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Instance</title>
  </head>

  <body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <div id="app">
      <div>{{str}}</div>
    </div>
    <script>
      var vm = new Vue({
        el: '#app',
        data: {
          str: 'Hello world',
        },
      });
    </script>
  </body>
</html>
```

vue 인스턴스를 생성하기 위해서는 생성자 함수 `Vue`를 사용해야 합니다. Javascript에서 생성자 함수는 `new` 키워드를 사용해서 호출해야합니다. 따라서 Javascript 문법에 맞게 Vue 생성자 함수를 호출하였고, 그 인자로 객체를 전달했습니다. Vue 공식 문서에 따르면 인자로 전달한 객체를 **options 객체**라고 합니다. options 객체에는 다양한 프로퍼티(속성)을 추가할 수 있는데 속성들은 [여기에서](https://kr.vuejs.org/v2/api/#propsData) 모두 확인 할 수 있습니다. 

options 객체 중 `el 프로퍼티`에 대해서 먼저 살펴볼까요? `el 프로퍼티`의 값으로는 HTML 엘리먼트 중 하나를 할당해야 합니다. 저는 app 이라는 id를 갖는 `<div>`를 그 값으로 주었습니다. 이렇게 하는 이유는 해당 HTML 엘리먼트에 vue 인스턴스를 붙여주기 위함입니다. vue 인스턴스가 붙게 되면 'id가 app인 div 태그를 기준으로 그 안에서는 vue 속성들을 사용할 거야!'라는 의미를 갖게 됩니다. 즉, HTML 코드 내에서 vue의 문법을 사용할 수 있게 되는 것입니다.

그다음으로 `data 프로퍼티`에 대해 살펴보겠습니다. `data 프로퍼티`는 그 값으로 **객체**를 할당해야 합니다. `data 프로퍼티`에 할당된 객체를 **'할당 객체'**라고 하겠습니다. 할당 객체에는 임의의 프로퍼티를 만들 수 있고, 그 값도 임의로 할당할 수 있습니다. 즉, 우리가 웹 애플리케이션을 만들면서 필요한 데이터들을 앞으로 할당 객체에 선언하게 될 것입니다. 지금 우리의 목표는 화면에 Hello world가 표현되는 것입니다. 그렇기 때문에 str이라는 프로퍼티를 만들고 그 값으로 'Hello world'를 할당하였습니다.

이제 화면에 출력해볼까요? 화면에 출력하기 위해서 id가 app인 `<div>` 안에 새로운 `<div>` 를 만들고  **“Mustache” 구문(이중 중괄호)**을 이용해서 str 프로퍼티를 출력하도록 했습니다. 아래 사진처럼 화면에 잘 출력되시나요?

![https://blog.kakaocdn.net/dn/bXzjnT/btqF7tn0qLu/eGkKuGC1xbvpiCP3qwVrbK/img.png](https://blog.kakaocdn.net/dn/bXzjnT/btqF7tn0qLu/eGkKuGC1xbvpiCP3qwVrbK/img.png)

`data 프로퍼티`에 할당된 '할당 객체'의 모든 프로퍼티들은 Vue 내부적으로 **반응형 시스템**에 추가됩니다. 저번 포스팅에서 다뤘던 Data Binding 기억나시나요? Data Binding이란 쉽게 말해서 화면에 Vue 데이터를 이용하여 출력하고 있는데 해당 데이터가 변하면 변화된 데이터에 맞게 화면이 자동으로 갱신되는것을 말합니다. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Instance</title>
  </head>

  <body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <div id="app">
      <div>{{str}}</div>
      <button @click="changeStr">텍스트를 변경해보자!</button>
    </div>
    <script>
      var vm = new Vue({
        el: '#app',
        data: {
          str: 'Hello world',
        },
        methods: {
          changeStr() {
            this.str = 'GoodBye';
          },
        },
      });
    </script>
  </body>
</html>
```

vue 인스턴스에 `methods 프로퍼티`를 추가했습니다! `methods 프로퍼티`도 그 값으로 객체를 갖게 되는데요, 객체 안에는 앞으로 우리가 웹 어플리케이션을 만들면서 필요한 함수들을 선언해 주게 될 것입니다. 저는 지금 버튼을 누르면 화면에 보이는 텍스트를 Hello world에서 Goodbye로 변경하고 싶어서 `changeStr`이라는 함수를 위 코드와 같이 선언해 줬습니다.

저번 포스팅에서 설명한 **DOM Listeners** 기억나시나요? vue는 화면에서 발생한 이벤트를 감지 할 수 있습니다. 이런 능력을 DOM Listeners 라고 하는데요, button 태그를 하나 만들어주고 @click="changeStr"이라는 코드를 추가해줬습니다. `@click`는 `v-on:click`의 함축된 표현입니다. '버튼을 클릭했을 때 내가 정의한 changeStr 함수를 실행시켜줘'라는 의미로 받아들이시면 될 것 같습니다.

잘되는지 한번 확인해 볼까요?

![vue-instance.gif](2%20vue%20instance%20aa03bf0950f749ad836ef14a62fd8a68/vue-instance.gif)

버튼을 클릭하면서 changeStr 함수가 실행되었습니다. 이것이 가능한 이유는 vue의 DOM Listener 능력 덕분입니다.😊 changeStr 함수가 실행되면서 data프로퍼티의 값인 '할당 객체'의 str 속성의 값이 'Hello world'에서 'GoodBye'로 변경되었죠? '할당 객체'는 vue 반응형 시스템에 추가되어 있기 때문에 변경된 값에 맞게 화면을 vue가 자동으로 바꿔주게 됩니다. 위 사진처럼요