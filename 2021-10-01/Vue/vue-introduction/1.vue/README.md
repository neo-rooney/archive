# 1. vue

# 개요

vue는 프론트앤드 개발을 위한 **프레임워크** 입니다!

프레임워크는 특정 프로그램을 개발하는데 기본적인 틀(frame)을 제공함으로써 개발자가 쉽게 프로그램을 개발하도록 도와주는 개발도구입니다. 즉, vue는 프론트앤드 개발을 하는데 틀을 제공해줌으로써 보다 편하고 빠르게 웹 어플리케이션을 개발하도록 도와주는 도구라고 할 수 있습니다.

프레임워크는 틀을 제공한다고 했습니다. 틀이라는 것은 규칙(Rule)입니다. 편하고 빠르게 개발하는 대신 vue가 정한 규칙을 지켜야 합니다. 규칙은 결국 vue 기본 문법이라 할 수 있고 앞으로 하나씩 vue 문법에 대해서 배워보도록 하겠습니다. 

그럼 어떤 이유에서 편하고 빠르게 개발할 수 있게 해 주는 걸까요?

![https://blog.kakaocdn.net/dn/cxqkeJ/btqF3SoGWQu/Hg2RP1JwYSxKfNdHJ7I6dK/img.png](https://blog.kakaocdn.net/dn/cxqkeJ/btqF3SoGWQu/Hg2RP1JwYSxKfNdHJ7I6dK/img.png)

위 사진에서 **View**가 우리가 웹 어플리케이션을 실행했을 때 화면에 보이는 부분입니다! 텍스트나 버튼 등이 이에 해당하겠네요

**Model**은 화면에 보일 데이터라고 생각하시면 됩니다.

웹 어플이케이션의 화면(View)에서 마우스의 클릭 또는 키보드의 입력 같은 이벤트가 발생하게 되면 vue는 발생한 이벤트를 감지(Listen) 할 수 있습니다. 이벤트를 감지한 vue는 이벤트가 발생하면 데이터를 변경하거나, 개발자가 정의한 특정 로직을 실행시켜줍니다! 이것이 vue의 첫 번째 특징인 **DOM Listeners** 입니다.

이벤트가 발생해서 데이터가 변경되었습니다! vue는 이벤트와 마찬가지로 데이터의 변경을 감지할 수 있습니다. 데이터가 변경되면 vue는 기존에 보이던 화면에서 변경된 부분을 찾아 기존에 보여지던 데이터를 변경된 데이터로 바꿔주는 역할을 하게 됩니다. 이것이 vue의 두 번째 특징인 **Data Bindings** 입니다.

vue의 특징에 대해 살펴봤으니 기존의 웹 개발과의 차이를 한번 보겠습니다

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script>
      var div = document.querySelector('#app');
      var str = 'hello vue';
      div.innerHTML = str;
    </script>
  </body>
</html>
```

간단한 HTML과 javascript 코드를 작성했습니다. 

live-server를 통해 해당 코드를 실행해 보도록 할 텐데요. live-server는 VSC의 extension에서 설치할 수 있습니다. 설치 후 VSC를 껐다가 다시 키시고 해당 코드를 열고 마우스 오른쪽 클릭- Open with live server를 클릭해 주시면 됩니다.

실행 결과 아래와 같은 사진을 볼 수 있습니다.

![https://blog.kakaocdn.net/dn/uP5KY/btqF7tAMBN8/yMKXgqphFzdWrRWJk92L71/img.png](https://blog.kakaocdn.net/dn/uP5KY/btqF7tAMBN8/yMKXgqphFzdWrRWJk92L71/img.png)

데이터를 변경해 보록 하겠습니다.아래 사진과 같이 진행해 주시면 되는데요.

![https://blog.kakaocdn.net/dn/blXrzp/btqF7LHYVEF/FkE1hv2FsZwNnI71PLGTGK/img.png](https://blog.kakaocdn.net/dn/blXrzp/btqF7LHYVEF/FkE1hv2FsZwNnI71PLGTGK/img.png)

크롬 개발자 도구에서 우리가 정의한 str이라는 변수에 접근할 수 있습니다. 기존 'hello vue'가 저장돼있던 것을 'Goodbye world'로 변경하였습니다. 화면에 변화가 생기나요?🙅‍♂️ 네! 변화가 없습니다. 이제 vue를 볼까요?

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue-dev</title>
  </head>

  <body>
    <div id="app">{{ str }}</div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          str: 'Hello Vue!',
        },
      });
    </script>
  </body>
</html>
```

새로운 HTML 파일을 만들고 위와 같이 코드를 입력했습니다.

live-server를 실행시키면 아래 사진과 같은 화면을 볼 수 있습니다.

![https://blog.kakaocdn.net/dn/FLi9g/btqF3TVtZN6/csoqvcGtETDSUNni4F8VC0/img.png](https://blog.kakaocdn.net/dn/FLi9g/btqF3TVtZN6/csoqvcGtETDSUNni4F8VC0/img.png)

좀 전에 했던 것과 동일한 화면이 보이시죠? 저는 미리 vue 개발자 도구를 켜놨습니다. vue 개발자 도구가 설치되어있지 않으시다면 [요기](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-ntp-icon)에서 설치하시면 됩니다.

vue 개발자 도구를 이용해서 데이터를 변경해 볼 건데요 아래 사진과 같이 진행하시면 됩니다.

![https://blog.kakaocdn.net/dn/bg5Nuq/btqF4Vea24Z/nZs9i5Em0WFd0YYsOLfcIk/img.gif](https://blog.kakaocdn.net/dn/bg5Nuq/btqF4Vea24Z/nZs9i5Em0WFd0YYsOLfcIk/img.gif)

변하시는 게 보이시나요?이것이 기존 웹 개발과 vue를 이용한 웹 개발의 차이입니다. vue 내부적으로 어떤 일이 일어나길래 데이터가 변경되면 바로 화면에 나타나는지 확인해 볼까요?

새로운 HTML 파일을 하나 더 만들어서 아래와 같은 코드를 작성했습니다. 해당 코드는 vue를 사용한 것이 아닌 기존의 웹 개발 방식으로 작성한 것입니다.😎

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>

    <script>
      var div = document.querySelector('#app');
      var viewModel = {};

      (function () {
        function init() {
          Object.defineProperty(viewModel, 'str', {
            // 속성에 접근했을 때의 동작을 정의
            get: function () {
              console.log('get');
            },
            // 속성에 값을 할당했을 때의 동작을 정의
            set: function (newValue) {
              console.log('set', newValue);
              render(newValue);
            },
          });
        }
        function render(value) {
          div.innerHTML = value;
        }

        init();
      })();
    </script>
  </body>
</html>
```

Object.defineProperty 메서드는 객체에 새로운 프로퍼티를 추가하거나 기존의 프로퍼티의 값을 변경할 때 사용합니다. 한 번 실행해 볼까요?

![vue1.gif](1%20vue%20c64a80822c274182bb3afe66dae00d0a/vue1.gif)

vue처럼 데이터가 변경되면 바로 화면에 갱신되는 것을 볼 수 있습니다. vue 내부적으로는 위 코드와 같은 원리로 화면을 갱신하는것입니다!