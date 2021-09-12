# 브라우저 저장소

# 개요

![스크린샷 2021-08-28 오전 10 42 36](https://user-images.githubusercontent.com/52039229/131202353-3b670d24-4782-4b30-9999-f68d9f8d4d9d.png)


데이터베이스를 사용하지 않고, 간단한 데이터를 저장 할 필요가 종종 있다. 사용자가 온라인 쇼핑몰에서 장바구니에 담은 상품 목록, 팝업창에서 30일간 보지 않겠다는 체크 여부 등이 그 예이다. 이런 필요성에서 처음 등장한것이 쿠키이고, 그 다음 등장한것이 로컬스토리지와 세션 스토리지이다.

이 3가지 모두 브라우저에 데이터가 저장된다는 점에서 보안이 취약 할 수 밖에 없다. 따라서 보안에 문제가 될 만한 정보는 저장하지 않는것이 좋다.

# 쿠키

## 쿠키란?

쿠키는 key, value 쌍으로 이뤄진 데이터로, 만료 날짜를 정 할 수 있다는 점이 특징이다. 만료시간은 expires와 max-age 두 가지 방법으로 설정할 수 있는데, expires는 특정 날짜를 max-age는 현재 시간으로부터 몇 초후에 쿠키를 만료 할 지 정할 수 있다.

## 쿠키의 만료

expires는 반드시 GMT(Greenwich Mean Time) 포맷으로 설정 해야 한다. JS에서는 `toUTCString` 메서드로 GMT 포멧으로 쉽게 변경 할 수있다. 

expires와 max-age 모두 유효시간이 지나면 브라우저에서 쿠키가 자동으로 삭제된다.

```jsx
document.cookie = "name=test; expires=Thu, Mon, 09 Aug 2021 13:08:46 GMT";
document.cookie = 'name=test; max-age=3600';
```

아래 사진은 쿠키가 생성되고 3초후 만료되도록 설정했다.

![https://user-images.githubusercontent.com/52039229/128634628-e1f98a76-0a21-41fc-8dd7-cea87ccb42b7.gif](https://user-images.githubusercontent.com/52039229/128634628-e1f98a76-0a21-41fc-8dd7-cea87ccb42b7.gif)

## 쿠키의 특징

쿠키의 가장 큰 특징은 `서버에 요청을 보낼 때마다 자동으로 서버로 전달된다는 점`이다. 

사용자가 로그인을 하고, 로그인에 성공 할 경우 서버는 로그인한 사용자에 대한 정보를 브라우저로 전달하게 될 것이다. 서버로 부터 받은 로그인 된 사용자 정보는 브라우저의 쿠키에 저장될 것이고, 브라우저는 그 이 후부터 서버로 데이터를 요청 할 때매다 사용자 정보를 쿠키에 실어 서버로 전달한다. 서버는 이 정보를 바탕으로 해당 요청에 대한 출처를 특정 할 수있게되는 구조이다. 

## 쿠키의 단점

브라우저가 서버로 요청을 보낼 때 알아서 쿠키에 있는 데이터가 서버로 전송된다. 개발자 입장에선 따로 신경 쓰지 않아도 알아서 데이터를 보내준다는 점이 어떤 면에선 고맙고 편하다. 그러나 브라우저에서만 사용 할 정보(예를 들면, 임시 저장한 사용자의 글 등)는 서버에서는 필요 없는 데이터이다. 이런 데이터가 몇개 안된다면 큰 문제가 없겠지만, 데이터가 쌓인다면 어쩐지 마음 한 구석이 불편해진다.(사실 이 문제를 경험으로 느껴본적은 없다. 😝)

 

또, 하나의 쿠키는 4KB 크키의 데이터를 저장 할 수있다. 만약 사용자가 작성 중인 글을 임시 저장한다고 했을 때, 4KB의 크키는 부족하다. 아마도 쿠키가 서버로 전송되야함을 고려해 4KB의 데이터 크기를 정한게 아닌가 싶다.

해당 글을 정리하기 위해 여러 문서를 참고했는데,  하나의 도메인에 저장 될 수있는 쿠키의 갯수가 20개라는 글들이 종종 보였다. 아래 코드를 이용해서 쿠키를 저장해봤는데, 100개 모두 잘 저장되는것을 확인했다. 아마 브라우저의 스팩에 따라 달라지는것같다. 따라서 20개 밖에 저장할 수 없다는 점은 단점에서 제외하였다.( 보다 정확한 정보를 아는 분은 알려주세요. 🙋‍♂️)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cookie</title>
  </head>
  <body>
    <script>
      for (let i = 0; i < 100; i++) {
        document.cookie = `test${i}=${i}`;
      }
    </script>
  </body>
</html>
```

![https://user-images.githubusercontent.com/52039229/128634641-96fe3b4b-403c-440c-99c4-7717a93c1362.png](https://user-images.githubusercontent.com/52039229/128634641-96fe3b4b-403c-440c-99c4-7717a93c1362.png)

# 로컬 스토리지와 세션 스토리지

쿠키의 단점을 보완하기 위해서 HTML5에서 추가된것이 바로 로컬 스토리지와 세션 스토리지이다. 

로컬 스토리지와 세션 스토리지는 사용방법도 비슷하다. 차이점은 데이터의 `영구성`이다.  로컬 스토리지는 브라우저를 종료해도 데이터가 지워지지 않는다. 즉, 로컬 스토리지에 저장된 데이터는 사용자가 직접 지워야만 사라진다. 반면, 세션 스토리지는 사용자가 브라우저를 종료하면 알아서 지워지게 된다. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>localStorage</title>
  </head>
  <body>
    <script>
      localStorage.setItem('name', 'rooney');
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Session Storage</title>
  </head>
  <body>
    <script>
      sessionStorage.setItem('name', 'rooney');
    </script>
  </body>
</html>
```
