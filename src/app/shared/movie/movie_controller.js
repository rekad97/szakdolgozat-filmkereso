const express = require('express');
const router = express.Router();
const movieService = require('./movieservice');

module.exports = router;

router.post('/saveMovie', save)
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
// function saveToContinue(req, res, next){
//   movieService.createMovieInContinue(req.body)
//     .then(() => res.json({}))
//     .catch(err => next(err));
// }
// function saveToAlreadyWatched(req, res, next){
//   movieService.createMovieInAlreadyWatched(req.body)
//     .then(() => res.json({}))
//     .catch(err => next(err));
// }