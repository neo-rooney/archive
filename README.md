#Moive api with GraphQL

> Problems solved by GraphQL
> 보통 프로젝트를 진행할 때 백엔드 개발자들이 구축한 Restful API를 통해 데이터를 받는다. 이 때 `Over-fetching` , `Under-fetching` 문제가 발생한다. 이를 해결한 것이 `GraphQL`이다.

-   Over-fetching  
    1번 사용자의 username이 필요한 경우, /user/1로 데이터를 요청하게 된다. 이 때 username 뿐만아니라 데이터베이스에있는 유저의 모든 정보(E-mail, age, imagefile-url ...) 를 불러오게 된다. 필요한 데이터는 username에 관한 정보인데 모든 정보를 불러와서 이 중 필요한 정보를 골라서 사용해야한다. 이 때 리소스의 낭비가 발생한다. 이런 문제를 `Over-fetching`이라고 한다.
-   Under-fetching  
    처음 어플리케이션을 작동시키면 첫 화면에 데이터를 표시하기 위해서 여러번의 데이터 요청이 발생 할 수 있다. 페이스북을 예로 들면 타임라인에 관한 데이터를 불러오고, 사용자 정보에 관한 데이터를 불러오고, 알림에 관한 데이터를 불러오는 등 여러번의 데이터 요청이 반복 될 것이다. 이런 문제를 `Under-fetching`이라고 한다.

> Preferences

```bash
yarn add graphql-yoga
yarn global add nodemon
yarn add babel-node
yarn add babel-cli babel-preset-env babel-preset-stage-3
```

```javascript
//.babelrc
{
    "presets": ["env", "stage-3"]
}
```
