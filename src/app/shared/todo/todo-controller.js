const express = require('express');
const router = express.Router();
const todoService = require('./todoservice');

router.get('/', getAll);
router.delete('/:id', _delete);
router.post('/create', create)

module.exports = router;

function create(req, res, next) {
    console.log('proba register 1');
    todoService.create(req.body)
        .then(() => console.log(res.json({})))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log('proba');
    todoService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    todoService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}