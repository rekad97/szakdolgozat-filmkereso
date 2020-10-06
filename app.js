require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./src/jwt');
const errorHandler = require('./src/app/errorHandler');



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use('/users', require('./src/app/shared/auth_and_register/user_controller'));
// app.use('/movies', require('./src/app/shared/movie/movie_controller'));
app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);

})


