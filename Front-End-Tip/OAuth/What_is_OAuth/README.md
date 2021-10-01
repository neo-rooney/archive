# OAuth2

# 개요

- 사용자 : 서비스를 사용하는 유저
- 내 서비스 : 내가 운영하는 서비스
- 제 3자 : 카카오톡 , 구글 등의 서비스

사용자가 내 서비스를 통해 제 3자 서비스의 기능을 이용하려는 경우가 있다. 내 서비스에서 구글 캘린더에 일정을 기록한다던지, 내 서비스를 통해 카카오톡 메세지를 보낸다던지가 그 예이다. 이를 위해선 사용자의 제 3자 서비스의 ID와 PW를 받아서 제 3자 서비스를 이용해야한다. 그러나 이런 방식은 사용자 입장에서 보안상 큰 위협이된다. 서비스를 운영하는 입장에서도 사용자의 계정정보가 유출될 염려가 야기된다. 이런 필요성에 의해 **OAuth**가 등장했다.

내 서비스에서 제 3자의 서비스를 이용하기 위해, 사용자에게 제 3자 서비스로 부터 **accessToken** 발급받도록 한다. 사용자는 제 3자 서비스에 로그인을 함으로써 **accessToken**을 발급신청을 하고, 제 3자는 이를 내 서비스에게 전달한다. 이를 통해 제 3자 서비스의 기능을 부분적으로 사용 할 수 있게 되는데, 이것이 바로 **OAuth**이다.

# 등록

사용자의 요청이 있더라도 제 3자는 무조건 **accessToken**을 발급해주지 않는다. 제 3자는 허가된 서비스에만 **accessToken**을 발급해주는데, 허가를 위해 내 서비스를 등록을 해야한다. 제 3자 서비스 별로 등록방법은 다르지만, 기본적으로 등록을 통해 **Client ID**와 **Client Secret**를 발급받게 된다. ClientID는 외부에 노출되도 상관없지만 Client Secret은 노출되어선 안된다. 

내 서비스를 등록 할 때 대부분 **Authorized redirect URIs**을 적게되는데 이는 추후 사용자의 요청에 의해 **accessToken**을 발급하는 경우 허가된 서비스인지 구별하는데 사용한다.

구글의 경우 [Google Cloud Platform](https://console.cloud.google.com/) 에서 내 서비스를 등록 할 수 있고, 카카오의 경우 [Kakao developers](https://developers.kakao.com/)에서 내 서비스를 등록 할 수 있다.

# 사용자의 동의

내 서비스에서 제 3자의 서비스를 이용하려는 경우 아래와 같은 버튼을 사용자에게 노출시킨다.

![React-Social-Login-Buttons.jpeg](OAuth2%20967c07494535404eaaf3809ffe9dc507/React-Social-Login-Buttons.jpeg)

사용자가 해당 버튼을 누르게 되면 아래와 보통 아래와 같은 주소로 이동하게 된다.

```jsx
https://resource.server/?client_id=abc&scope=email,profile&redirect_uri=https://myservice.com/callback
```

위 주소로 이동하게 되면, 제 3자는 사용자가 로그인 되어있지 않은 경우 로그인을 하도록 요청하게 된다.

![22.png](OAuth2%20967c07494535404eaaf3809ffe9dc507/22.png)

로그인을 완료하게 되면 제 3자 서비스는 client ID와 redirect_uri가 등록된 서비스의 그것과 같은지 비교하게된다. 이 때 동일하지 않다면 서비스를 종료하고 동일하다면 내 서비스에서 요청한 email, profile에 대한 정보를 내 서비스에게 제공 할 것인지 동의를 얻는 화면을 사용자에게 보여준다.

![3.png](OAuth2%20967c07494535404eaaf3809ffe9dc507/3.png)

동의를 하게되면 제 3자 서비스의 서버에 유저의 ID와 허용한 제 3자 서비스의 기능을 기록하고 보관한다. 

# 제 3자 서비스의 승인

사용자의 동의를 얻게되면 제 3자 서비스의 서버는 **authorization code**를 생성하고 사용자의 브라우저에 아래 형식과 같은 주소로 이동하도록 한다.

```jsx
https://myservice.com/callback?code=2
```

여기서 code는 제 3자 서비스의 서버는 authorization code와 동일 한 것으로 임시 비밀번호 역할을 하게 되는데, 사용자가 위 주소로 이동함으로써 내 서비스도 해당 code를 알 수 있게 된다.

이제 내 서비스는 아래 주소 형식으로 제 3자 서버에 직접 접속하게 된다.

```jsx
https://resource.server/token?grant_type=authoricaiton_code&code=2&redirect_uri=https://myservice.com/callback&client_id=abc&client_secret=adsf123zdf
```

이제 제 3자 서비스는 자신의 서버에 기록된 정보와 내 서비스에서 요청한 값(code, redirect_uri, client ID, client Secret)이 동일한지 여부를 검증하고, 동일하다면 accessToken을 발급한다.

# accessToken 발급

accessToken을 발급한 제 3자 서버는 내 서비스의 요청에 대한 응답으로 accessToken을 전달한다

내 서비스는 이 accessToken을 내부 정책에 의해 DB등에 저장하게 된다.

발급받은 accessToken은 제 3자 서비스의 서버에 기록된 정보에 의해 'A라는 유저의 email, profile 정보를 전달하고, 캘린더 기능에 접근 할 수 있음'과 같은 기능을 보장받는다.

# refreshToken

기본적으로 accessToken은 수명을 갖고있다. accessToken이 수명을 다하게되면 더 이상 제 3자 서비스에 기능을 요청 할 수 없다. accessToken의 수명이 다 할 때 마다 사용자에게 accessToken 발급 절차를 다시 밟게 하는 것은 서비스를 운영하는 입장에서 부담이다. 이럴때 사용 하는 것이 바로 refreshToken이다. 

내 서비스에서 accessToken을 통해 제 3자 서비스에 특정 기능을 요청했는데 accessToken이 만료되었다는 응답을 받게되면 refreshToken과 client ID , client Secret을 제 3자 서버에 전달함으로써 다시 acceessToken을 발급 받을 수 있다. 이 때 refreshToken을 재 발급하는 경우도 있고 refreshToken은 재발급 되지 않는 경우도 있다. 이는 제 3자 서비스에 따라 다르므로 이용하고자 하는 서비스의 문서에서 알 수 있다.