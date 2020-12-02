const express = require('express');
const router = express.Router();
const todoService = require('./todoservice');

router.get('/', getAll);
router.delete('/:id', _delete);
router.post('/create', create);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    console.log('proba todo');
    todoService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    todoService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    todoService.getById(req.params.id)
        .then(todo => {
            todo ? res.json(todo) : res.sendStatus(404);
            console.log(todo);
        })
        .catch(err => {
            console.log('getByid error', err);
            next(err)
        });
}

function _delete(req, res, next) {
    todoService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}