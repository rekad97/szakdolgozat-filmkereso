const config = require('./app/config/config');
const expressJwt = require('express-jwt');
const userService = require('./app/shared/auth_and_register/userservice');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/users/auth',
            '/users/register',
            '/users',
            '/users/:id',
            '/movies/saveMovie'
        ]
    });
}

async function isRevoked(req, payload, done) {
    console.log('első rész isRevoked');
    const user = await userService.getById(payload.sub);
    console.log('második rész isRevoked');

    if (!user) {
        return done(null, true);
    }
    done();

}