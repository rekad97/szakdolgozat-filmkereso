const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    toWatchList: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    continue: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    alreadyWatched: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
    ],
    toDoList: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'ToDo' }

    ]
});

userModel.set('toJSON', {
    virtuals: true,
    versionkey: false,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', userModel);