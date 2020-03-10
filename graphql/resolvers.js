import { getMovies } from "./db";

const revolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
};

export default revolvers;
