const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dogear-users')

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
    const token = req.headers[x-access-token];
    try{
        const decoded = jwt.verify(token, secret);
        const email = decoded.email;
        await User.updateOne({email: email}, { $set: { bookmarks: req.body.bookmarks}});

        return {status: 'ok'};
    } catch(err)
    {
        console.log(err);
        res.json({status: 'error', error: 'invalid token'});
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
        res.json({status: 'error', error: 'invalid token'});
    }
});

app.listen(1337, () => {
    console.log('Server started on 1337');
})