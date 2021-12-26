const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/dbconfig');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
