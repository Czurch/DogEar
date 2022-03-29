const mongoose = require('mongoose');


const Bookmark = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    image: {type: String},
    title: {type: String},
    description: {type: String},
    tags: [String],
});
const User = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    bookmarks: [Bookmark],
    },
    {collection: 'user-data'}
);


const model = mongoose.model('Userdata', User);

module.exports = model;