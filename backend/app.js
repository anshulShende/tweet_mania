const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require('cors');
const db = require('./config/dbconfig');
require('dotenv').config();

const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const tweetRouter = require('./routes/tweetRouter');
const feedRouter = require('./routes/feedRoutes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/frontend')));

db.once('open', ()=>{
    console.log('Connected to Mongo DB Atlas');
});

db.on('error', (err) => {
    console.log(err);
});

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/tweet', tweetRouter);
app.use('/feed', feedRouter);

module.exports = app;
