const config = require('src/app/config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('src/app/database/db');

const ToDo = db.ToDo;
const User = db.User;



module.exports = {
    getAll,
    create,
    delete: _delete,
    getById
};

async function getAll() {
    return await ToDo.find();
}

async function create(userParam) {
    console.log("todo userparam", userParam);
    const todo = new ToDo(userParam);
    await todo.save();

    saveToToDoList(userParam.userId, todo);
}

async function _delete(id) {
    await ToDo.findByIdAndRemove(id);
}

async function getById(id) {
    return await ToDo.findById(id);
}


async function saveToToDoList(userId, todo) {
    return User.findByIdAndUpdate(
        userId, { $push: { toDoList: todo.id } }, { new: true, useFindAndModify: false }
    );
}