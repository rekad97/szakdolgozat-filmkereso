const config = require('src/app/config/config');

const db = require('src/app/database/db');
const Movie = db.Movie;
const User = db.User;

module.exports = {
    create,
    getAll,
    getById

};

async function create(userParam) {

    if (await Movie.findOne({ Title: userParam.Title })) {
        console.log(Movie);

        throw 'Movie ' + userParam.Title + 'is already in database';
    }

    console.log("userParam", userParam);
    const movie = new Movie({
            imdbID: userParam.imdbID,
            Title: userParam.Title,
            Year: userParam.Year,
            Runtime: userParam.Runtime,
            Genre: userParam.Genre,
            Actors: userParam.Actors,
            Plot: userParam.Plot,
            Poster: userParam.Poster,
            Rated: userParam.Rated,
            Ratings: userParam.Rating
        }
        // "gzhujnkml,",

    );
    // const movie = new Movie(
    //     userParam[0]
    // );
    console.log('movie', movie);

    // const movie = new Movie(userParam);
    await movie.save();

    saveToWatch("5f9c078b1bc9d34574d1d6f9", movie);

}


async function getAll() {
    return await Movie.find();
}

async function getById(id) {
    return await Movie.findById(id);
}

async function saveToWatch(id, movie) {
    return User.findByIdAndUpdate(
        id, { $push: { toWatchList: movie.id } }, { new: true, useFindAndModify: false }
    );

}