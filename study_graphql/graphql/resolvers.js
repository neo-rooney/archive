import { getMovies, getById } from "./db";

const revolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getById(id)
    }
};

export default revolvers;
