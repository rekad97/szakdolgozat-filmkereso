const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoModel = new Schema({
    title: { type: String },
    description: { type: String }

});

module.exports = mongoose.model('ToDo', todoModel);