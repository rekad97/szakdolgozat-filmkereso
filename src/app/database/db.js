const config = require('../config/config');
const mongoose = require('mongoose');

const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/users.js'),
    Movie: require('../models/movie.js'),
    ToDo: require('../models/todo.js')

}