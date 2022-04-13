const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./keys');
const mongoose = require('mongoose')
const AUTH_router = require('./routes/auth');

mongoose.connect(keys.MONGO_URI)
  .then(() => {
    console.log('Database is connected')
  }).catch(e => {
    console.log('Database connection problems')
    console.error(e)
  })




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//import router
app.use('/api/auth', AUTH_router);


module.exports = app;