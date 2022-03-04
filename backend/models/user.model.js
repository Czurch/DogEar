const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    bookmarks: {type: Array},
    },
    {collection: 'user-data'}
);

const model = mongoose.model('Userdata', User);

module.exports = model;