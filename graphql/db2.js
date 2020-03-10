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
