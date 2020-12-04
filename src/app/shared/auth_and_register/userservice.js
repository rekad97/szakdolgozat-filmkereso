const config = require('src/app/config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('src/app/database/db');

const User = db.User;
const Movie = db.Movie;


module.exports = {
    auth,
    getAll,
    getById,
    create,
    updateAlreadyWatched,
    updateContinue,
    updateToWatch,
    updateToDoList,
    delete: _delete,
    createMovieInToWatch
};

async function auth({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getAll() {
    return await User.find();
}

function getById(id) {
    return User.findById(id);
}

async function create(userParam) {
    if (await User.findOne({ username: userParam.username })) {

        throw 'Username "' + userParam.username + '" is already taken';

    }

    const user = new User(userParam);

    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
}

async function updateToWatch(id, userParam) {
    return User.findByIdAndUpdate(id, { $set: { toWatchList: userParam } }, { new: true, useFindAndModify: false });
}

async function updateContinue(id, userParam) {
    return User.findByIdAndUpdate(id, { $set: { continue: userParam } }, { new: true, useFindAndModify: false });
}

async function updateAlreadyWatched(id, userParam) {
    return User.findByIdAndUpdate(id, { $set: { alreadyWatched: userParam } }, { new: true, useFindAndModify: false });
}
async function updateToDoList(id, userParam) {
    return User.findByIdAndUpdate(id, { $set: { toDoList: userParam } }, { new: true, useFindAndModify: false });
}


async function _delete(id) {
    await User.findByIdAndRemove(id);
}

async function createMovieInToWatch(user_id, movie) {
    const user = await User.findById(user_id);
    user.toWatch = movie;
    Object.assign(user, movie);
    await user.save();
    console.log(user);
    console.log(movie);
}