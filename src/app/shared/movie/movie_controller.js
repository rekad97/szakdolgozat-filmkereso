const express = require('express');
const router = express.Router();
const movieService = require('./movieservice');

module.exports = router;

router.put('/:id', saveToWatch)
router.post('/continue', saveToContinue)
router.post('/already', saveToAlreadyWatched)

function saveToWatch(req, res, next){
    movieService.createMovieInToWatch(req.params.id, req.body)
      .then(() => res.json({}))
      .catch(err => next(err));


  }
function saveToContinue(req, res, next){
  movieService.createMovieInContinue(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}
function saveToAlreadyWatched(req, res, next){
  movieService.createMovieInAlreadyWatched(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}
