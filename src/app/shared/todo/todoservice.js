const config = require('src/app/config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('src/app/database/db');

const ToDo = db.ToDo;


module.exports = {
    getAll,
    create,
    delete: _delete,
};

async function getAll() {
    return await ToDo.find();
}

async function create(userParam) {
    const todo = new ToDo(userParam);
    await todo.save();
}

async function _delete(id) {
    await ToDo.findByIdAndRemove(id);
}