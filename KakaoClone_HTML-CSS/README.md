# KakaoClone_HTML-CSS

## 제작 동기
1번
```HTML
<strong><span style="font-size:22px;">HTML</span></strong>
```
2번
```HTML
<h3>HTML</h3>
```
검색엔진에 같은 정보를 검색하면 위의 코드보다는 아래의 코드가 노출이 잘됩니다. 1번과 2번의 형태는 같을지라도 2번의 경우에는 `제목`이라는 정보를 담고 있기 때문입니다.  

HTML을 의미에 맞게 잘 사용하는것은 비지니스 측면에서 중요합니다. HTML 연습을 하는 이유입니다.

어떻게 프로그래밍을 공부할까 많은 고민을 했습니다. 어떤 책을 보고, 어떤 강의를 들어야하는지의 결정하는것이 생각보다 쉽지 않았습니다.  

그러다 클론코딩이라는 공부법에 대해 알게 되었고, 많은 사용자에게 검증받은 훌률한 서비스들을 따라 만드는것이 괜찮은 공부방법이라는 의견에 공감하였습니다.  

Nomadcoder 사이트에서 관련 강의가 있다는것이 선택에 도움이 되었습니다. Clon Cording을 하게된 이유입니다. 

## Media Queries
사용자가 브라우저를 특정 사이즈에 맞춘경우에만 어플리케이션이 실행되도록 설계
#### mobile.css
```CSS
.bigScreen {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fce006;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
    font-size: 28px;
    padding: 0px 20px;
    line-height: 1.5;
    text-align: center;
    display: none;
    z-index: 4;
}

@media screen and (min-width: 550px) {
    .bigScreen {
        display: flex;
    }
}
```

#### 구현장면
<img src="https://user-images.githubusercontent.com/52039229/73781061-fb1e6980-47d2-11ea-8e12-9136bc38b27f.gif" alt="drawing" width="400"/>


## Animations
더 나은 사용자 경험을 위해 다양한 Animations 적용

#### chat.css
```CSS
.
.
.
.chat__write:focus {
    outline: none;
    width: 80%;
    transform: translateY(-100px);
    border-radius: 40px;
    animation: float 3s linear infinite forwards;
}

.chat__write:focus ~ .chat__icon {
    opacity: 0;
}

.chat__icon {
    font-size: 18px;
    transition: opacity 0.3s ease-in-out;
}

.chat__write i {
    font-size: 22px;
}

.chat__write--column:nth-child(2) {
    width: 80%;
}

.chat__write--column input {
    padding: 10px;
    width: 100%;
    border: none;
    font-size: 14px;
}
.
.
.
@keyframes incomingAnim {
    from {
        opacity: 0;
        transform: translateX(-200px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

.incoming-message {
    animation: incomingAnim 0.5s ease-out forwards;
}

@keyframes sentAnimation {
    from {
        opacity: 0;
        transform: translateX(200px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

.send-message {
    animation: sentAnimation 0.5s ease-out forwards;
}
```

#### 구현장면
<img src="https://user-images.githubusercontent.com/52039229/73781923-7e8c8a80-47d4-11ea-9169-850ca8405556.gif" alt="drawing" width="400" height="600"/>

## 개발 후기
HTML, CSS만으로 카카오톡을 모방하는것이 상당히 재미있었습니다. 이번 개발을 통해서 얻은 점은 다음과 같습니다.
1. 산재되어있던 HTML, CSS 지식을 정리하였습니다.
1. BoxModel에 대한 이해도가 높아졌습니다.
1. Animation과 Media Queries 같은 이론만 알던 CSS를 실제 적용해보았습니다. 
1. HTML과 CSS의 불편함에 대해 느꼈습니다. 자연스럽게 Sass, Pug 같은 Webpack에대한 관심이 생겼고 다음 학습 계획을 세웠습니다.

## 향후 해당 어플리케이션 개선 방향
1. Webpack을 이용하여 똑같은 어플리케이션을 개발할 것입니다.
1. Javascript(ES6)을 이용하여 기능을 추가 할 것입니다. 
1.  웹 소켓 기술을 적용하여 실시간 채팅이 가능 한 사이트로 발전 시킬 계획입니다. 

