const config = require('src/app/config/config');

const db = require('src/app/database/db');
const Movie = db.Movie;

module.exports = {
  create,
  getAll,
  getById

};

async function create(userParam) {
  if(await Movie.findOne( { title: userParam.Title})) {
    throw 'Movie ' + userParam.Title +'is already in database';
  }

  const movie = new Movie(userParam);
  await movie.save();
}


async function getAll() {
  return await Movie.find();
}

async function getById(id) {
  return await Movie.findById(id);
}

