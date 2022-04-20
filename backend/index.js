const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const xpath = require('xpath');
const {DOMParser} = require('xmldom');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const { parse } = require('dotenv');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
}));

const xpaths = {
    title: 'string(//meta[@property="og:title"]/@content)',
    description: 'string(//meta[@property="og:description"]/@content)',
    image: 'string(//meta[@property="og:image"]/@content)',
    keywords: 'string(//meta[@property="keywords"]/@content)',
}

const retrievePage = url => axios.request({url});
const convertBodyToDocument = body => new DOMParser().parseFromString(body);
const nodesFromDocument = (document, xpathselector) => xpath.select(xpathselector, document);  // select specified key from doc
const mapProperties = (paths, document) =>
    Object.keys(paths).reduce((acc,key) =>
        ({...acc, [key]: nodesFromDocument(document, paths[key])}), {});  //for each key in xpaths, obtain the node from the document

async function parseUrl(url) {
    const res = await retrievePage(url);
    const document = convertBodyToDocument(res.data);
    const mappedProperties = mapProperties(xpaths, document);
    return mappedProperties;
}

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

app.post('/api/scrape', async (req, res) => {
    const {body} = req;
    const {url} = body;

    try{
        const result = await parseUrl(url)
        console.log(result);
        return res.json({status: 'ok', result: result});
    } catch(err)
    {
        console.log(err);
        return res.json({status: 'error', error: 'unable to scrape page'});
    }
})

app.listen(process.env.PORT || 1337, () => {
    console.log('Server started on 1337');
})