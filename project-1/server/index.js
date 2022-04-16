const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./keys');
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport')
const AUTH_router = require('./routes/auth');
const POST_router = require("./routes/post");
const COMMENT_router = require("./routes/comment")
mongoose.connect(keys.MONGO_URI)
  .then(() => {
    console.log('Database is connected')
  }).catch(e => {
    console.log('Database connection problems')
    console.error(e)
  })




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize())
console.log(passportStrategy, 'ASFASDASDAS')
passport.use('passport-jwt',passportStrategy)


//import router
app.use('/api/auth', AUTH_router);
app.use('/api/post', POST_router);
app.use('/api/comment', COMMENT_router);


module.exports = app;
