require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./src/jwt');
const expressJwt = require('express-jwt');
const errorHandler = require('./src/app/errorHandler');
const config = require('./src/app/config/config.json');
const passport = require('passport');
const session = require('express-session');
var SECRET = "secret"
var mongoose = require('mongoose');
var database = require('./src/app/database/db-config');
//mongoose.connect(database.remoteUrl, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());
app.use('/users', require('./src/app/shared/auth_and_register/user_controller'), expressJwt({ secret: SECRET }));
app.use('/movies', require('./src/app/shared/movie/movie_controller'), expressJwt({ secret: SECRET }));
app.use('/todos', require('./src/app/shared/todo/todo-controller'), expressJwt({ secret: SECRET }));
app.use(errorHandler);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
})
