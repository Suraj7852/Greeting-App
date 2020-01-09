const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
mongoose.Promise = global.Promise;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/greeting-app', {
   useNewUrlParser: true
}).then(() => {
    console.log("Database connected successfully... ");
}).catch(err => {
    console.log('Failed to connect DataBase...');
    process.exit();
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/',routes);

module.exports = app;
