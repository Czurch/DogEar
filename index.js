const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ferrel4:b0yBagelSr@cluster0.decaw.mongodb.net/dogear-users?retryWrites=true&w=majority');

const secret = 'alphabalugacomancheedaringearlyfather';

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
        });
        res.json({status: 'ok' });
    } catch (err) {
        res.json({status: 'error', error: 'Duplicate email' });
    }
});

app.post('/api/login', async (req,res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if(user) {
        const token = jwt.sign({
            email: user.email,
        }, secret);
        return res.json({status: 'ok', user: token });
    } else {
        return res.json({status: 'error', user: false });
    }
    
});

app.post('/api/bookmarks', async (req,res) => {
    const token = req.headers['x-access-token'];
    try{
        const decoded = jwt.verify(token, secret);
        const email = decoded.email;
        await User.updateOne({email: email}, { $set: { bookmarks: req.body}});
        const user = await User.findOne({email: email});

        return res.json({status: 'ok', bookmarks: user.bookmarks});
    } catch(err)
    {
        console.log(err);
        return res.json({status: 'error', error: 'invalid token'});
    }
});

app.get('/api/bookmarks', async (req,res) => {
    const token = req.headers['x-access-token'];
    try{
        const decoded = jwt.verify(token, secret);
        const email = decoded.email;
        const user = await User.findOne({email: email});

        return res.json({status: 'ok', bookmarks: user.bookmarks});
    } catch(err)
    {
        console.log(err);
        return res.json({status: 'error', error: 'invalid token'});
    }
});

app.listen(process.env.PORT || 1337, () => {
    console.log('Server started on 1337');
})