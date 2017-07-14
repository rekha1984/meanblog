const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path')
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=> {
  if (err){
    console.log('could not connect to database:',err);
  }else{
    console.log('connect to data base:'+config.db);
  }
});

app.use(express.static(__dirname+'/client/dist/'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});



app.listen(1800, () =>{
  console.log('this server port 1800 is running')
});