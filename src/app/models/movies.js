const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  imdbID: { type: String},
Title: { type: String},
Year: { type: String},
Runtime: { type: String},
Genre: { type: String},
Actors: { type: String},
Plot: { type: String},
Poster: { type: String},
});



module.exports= mongoose.model('Movie', schema);
