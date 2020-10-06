const config = require('./app/config/config');
const expressJwt = require('express-jwt');
const userService = require('./app/shared/auth_and_register/userservice');

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked}).unless({
    path: [
      '/users/auth',
      '/users/register'
    ]
  });
}

async function  isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  if(!user) {
    return done(null, true);
  }
  done();

}
