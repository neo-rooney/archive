# Movie api whit GraphQL

## Preferences

```bash
yarn add graphql-yoga
yarn global add nodemon
yarn add babel-node
yarn add babel-cli babel-preset-env babel-preset-stage-3
yarn add axios
```

## Get Movie List

### index.js

GraphQL Server를 구성해준다. 사용할 Schma와 Reolver에 대한 정의를 한다.

```javascript
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));
```

#### Schema

사용할 API를 보고 필요한 정보에 대한 정의를 내린다.

```bash
type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
}

type Query {
    movies(limit: Int, rating: Float): [Movie]!
}
```

### resolver

axios를 이용하여 데이터를 받아오는 function을 정의한다.

```javascript
//db.js
import axios from "axios";

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
};
```

Query의 형태를 정의해준다.

```javascript
//resolvers.js
import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating)
    }
};

export default resolvers;
```

## Get Movie Detail

### Schema

```bash
type Movie {
    id: Int!
    title: String!
    rating: Float
    description_full: String
    language: String
    medium_cover_image: String
    genres: [String]
}

type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
}
```

### resolver

```javascript
//db.js
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
.
.
.
export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};
```

```javascript
//resolvers.js
import { getMovies, getMovie } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id)
    }
};

export default resolvers;
```
