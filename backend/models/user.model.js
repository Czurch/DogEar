const mongoose = require('mongoose');

const Bookmark = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    image: {type: String},
    title: {type: String},
    description: {type: String},
    tags: [String],
});

const Page = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String},
    bookmarks: [Bookmark],
});

const User = new mongoose.Schema({
    username: {type: String, immutable: true, unique: true},
    email: {type: String,
        required: true,
        unique: true, 
        validate: {
            validator: (value) => true,
            message: props => `${props.value} is not a valid email`,
        }},
    password: {type: String, required: true},
    bookmarks: [Bookmark],
    pages: [Page],
    },
    {collection: 'user-data'}
);
//mongoose.SchemaTypes.ObjectId

const usrmodel = mongoose.model('Userdata', User);
const pgmodel = mongoose.model('Pagedata', Page);
const bkmkmodel = mongoose.model('Bookmarkdata', Bookmark);


module.exports = usrmodel,pgmodel,bkmkmodel;