const express = require('express');
const router = express.Router();
const movieService = require('./movieservice');

module.exports = router;

router.post('/saveMovie', save);
router.post('/saveToWatch', saveToWatch);
router.post('/saveContinue', saveContinue);
router.post('/saveAlreadyWatched', saveAlreadyWatched);
router.get('/', getAll);
router.get('/:id', getById);

// router.post('/continue', saveToContinue)
// router.post('/already', saveToAlreadyWatched)

function save(req, res, next) {
    console.log('ideért eleje');
    movieService.create(req.body[0])
        .then(() => {
            console.log(res.json({}));
            res.send(req.body[0]);
        })
        .catch(err => {
            console.log('save error', err);
            next(err)
        });
    console.log('ideért vége');


}

function getAll(req, res, next) {
    console.log('proba');
    movieService.getAll()
        .then(movies => res.json(movies))
        .catch(err => next(err));
}

function getById(req, res, next) {
    movieService.getById(req.params.id)
        .then(movie => {
            movie ? res.json(movie) : res.sendStatus(404);
            console.log("movie in ID", movie);
        })
        .catch(err => {
            console.log('getByid error', err);
            next(err)
        });
}

function saveToWatch(req, res, next) {
    movieService.saveToWatch(req.body)
        .then(() => {
            console.log("res console", res.json({}));
            res.send(req.body);
        })
        .catch(err => {
            console.log('save error', err);
            next(err)
        });
    console.log('ideért vége');
}

function saveContinue(req, res, next) {
    movieService.saveContinue(req.body)
        .then(() => {
            console.log("res console", res.json({}));
            res.send(req.body);
        })
        .catch(err => {
            console.log('save error', err);
            next(err)
        });
    console.log('ideért vége');
}

function saveAlreadyWatched(req, res, next) {
    movieService.saveAlreadyWatched(req.body)
        .then(() => {
            console.log("res console", res.json({}));
            res.send(req.body);
        })
        .catch(err => {
            console.log('save error', err);
            next(err)
        });
    console.log('ideért vége');
}