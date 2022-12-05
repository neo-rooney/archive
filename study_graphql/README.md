# Moive api with GraphQL

## Basic Theory

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

> Construct server by GraphQL

#### schema

요청 할 데이터의 형태를 개발자가 정해주는 것이라고 생각하면 된다.

```bash
#schema.graphql
type Movie {
    id: Int!
    name: String!
    score: Int!
}

type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
}
```

`Movie`라는 데이터 형태를 만들었다. Query로 `movies`를 요청하면 `Movie`의 배열 형태를 받을 수 있고, `movie(id:1)`의 형태로 요청하면 id가 1인 Movie데이터만 받을 수 있다. 이런식으로 개발자가 데이터의 형태를 정의하는것이 schema이다. `!`는 데이터를 요청 할 때 필수적으로 넣어서 요청하라는 의미이다.

#### resolver

앞서 정의한 schema의 형태로 요청이오면 서버에서 작동해야하는 로직을 정의해주어야 한다. 이런 역할을 하는것이 `resolver`라고 생각하면 된다.

```javascript
//db.js
let movies = [
    {
        id: 0,
        name: "AAAAA",
        score: 1
    },
    {
        id: 1,
        name: "BBBBB",
        score: 8
    },
    {
        id: 2,
        name: "CCCCC",
        score: 99
    },
    {
        id: 3,
        name: "DDDDD",
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};
```

데이터베이스에 위와 같은 데이터가 있다고 가정하고 해당 데이터를 모두 가져오는 `getMovies`함수를 정의했다.

```javascript
//resolver.js
import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    }
};

export default resolvers;
```

resolver에서 `Query:{ movies }` 형태로 데이터의 요청이 오면 앞서 정의한 `getMovies`함수가 호출되도록 하였고 , 이 함수는 모든 영화의 데이터를 반환할 것이다. 여기서 REST API등과의 차이점은 데이터를 요청할 때 `Query:{ movies :{ name }}` 처럼 받고자 하는 데이터의 종류를 선택 할 수 있다는 점이다. 아직 기존의 REST API와의 차이점을 느낄 수는 없으나 실습을 더 진행하면서 차차 알아가도록 하자. 일단 GraphQL의 사용법에 익숙해지는데 중점을 둔다.

```javascript
//index.js
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));
```

`index.js`에서 앞서 정의한 `schema`와 `resolver`를 서버에 등록하고 서버를 시작하면 데이터의 요청을 할 수 있다.

#### Mutation

데이터베이스 안의 데이터의 변형을 일으키는 작업을 할 경우에는 Query가 아닌 mutation으로 데이터를 요청한다. 특정 데이터를 추가하거나 삭제하는 경우가 그 예가 될것이다. 작업 순서는 앞서 설명한 Query와 동일하다.

1. schema에서 Mutation정의

```bash
#schema.graphql
type Movie {
    id: Int!
    name: String!
    score: Int!
}

type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
}

type Mutation {
    addMovie(name: String!, score: Int!): Movie!
    deleteMovie(id: Int!): Boolean!
}

```

2. resolver 정의

```javascript
//db.js
let movies = [
    {
        id: 0,
        name: "AAAAA",
        score: 1
    },
    {
        id: 1,
        name: "BBBBB",
        score: 8
    },
    {
        id: 2,
        name: "CCCCC",
        score: 99
    },
    {
        id: 3,
        name: "DDDDD",
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
```

```javascript
//resolvers.js
import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;
```

이제 아래와 같은 형태로 데이터를 요청하게 되면 추가된 영화의 제목과 평점에 관한 데이터를 반환받게되며, 데이터베이스에는 해당 영화가 추가되게 된다.

```bash
Mutation{
    addMovie(name:"KKKK", score:10){
        name
        score
    }
}
```
