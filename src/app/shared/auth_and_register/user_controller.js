const express = require('express');
const router = express.Router();
const userService = require('./userservice');


router.post('/auth', auth);
router.post('/register', register);
router.post('/towatch', saveToWatch);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/toWatch/:id', updateToWatch);
router.put('/continue/:id', updateContinue);
router.put('/alreadyWatched/:id', updateAlreadyWatched);
router.put('/toDoList/:id', updateToDoList);
router.delete('/:id', _delete);

module.exports = router;

function auth(req, res, next) {
    userService.auth(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect!' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    console.log('proba register 1');
    userService.create(req.body)
        .then(() => console.log(res.json({})))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log('proba');
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => {
            user ? res.json(user) : res.sendStatus(404);
            console.log("Usern in ID", user);
        })
        .catch(err => {
            console.log('getByid error', err);
            next(err)
        });
}

function updateToWatch(req, res, next) {
    userService.updateToWatch(req.params.id, req.body)

    .then((data) => {
            console.log("update towatch itt vagyok", data);

            res.json({});
        })
        .catch(err => {
            console.log("itt a hibaaa", err);
            next(err)
        });
}

function updateContinue(req, res, next) {
    userService.updateContinue(req.params.id, req.body)

    .then((data) => {
            console.log("update continue itt vagyok", data);

            res.json({});
        })
        .catch(err => {
            console.log("itt a hibaaa", err);
            next(err)
        });
}

function updateAlreadyWatched(req, res, next) {
    userService.updateAlreadyWatched(req.params.id, req.body)

    .then((data) => {
            console.log("update alreadywatched itt vagyok", data);

            res.json({});
        })
        .catch(err => {
            console.log("itt a hibaaa", err);
            next(err)
        });
}

function updateToDoList(req, res, next) {
    userService.updatetoDoList(req.params.id, req.body)

    .then((data) => {
            console.log("update todolist itt vagyok", data);

            res.json({});
        })
        .catch(err => {
            console.log("itt a hibaaa", err);
            next(err)
        });
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function saveToWatch(req, res, next) {
    userService.createMovieInToWatch(req.params.id, res[0].array[0].body)
        .then(() => console.log(res.json({})))
        .catch(err => next(err));


}

function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    console.log(token)
        // jwt.verify(token,'secret', function(err, decoded) {
        //   if (err)
        //   return res.status(500).send({ auth: false, message: err }); 
        //   //req.username = decoded.username;
        //   console.log(decoded)
        //   next();
        // });
    jwt.verify(token);
    next();
}