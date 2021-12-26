const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/dbconfig');
require('dotenv').config();

const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const tweetRouter = require('./routes/tweetRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.once('open', ()=>{
    console.log('Connected to Mongo DB Atlas');
});

db.on('error', (err) => {
    console.log(err);
});

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/tweet', tweetRouter);

module.exports = app;
