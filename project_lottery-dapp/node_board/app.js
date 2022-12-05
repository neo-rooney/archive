var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//mongoDB setup

var mongoose = require('mongoose');
var promise = mongoose.connect(`mongodb+srv://root:1234@cluster0-h5kaz.mongodb.net/test?retryWrites=true&w=majority`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
// console.log(promise);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected succefully');
});

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', favicon.ico)));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('not Found');
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// localhost
var Port = 8080;
app.listen(Port);

module.exports = app;