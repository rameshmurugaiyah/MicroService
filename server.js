//var express = require('express');
function start(app){
    //var app = express();
    app.listen(3000,()=>{
        console.log('Server Started in port 3000');
    });
  }
exports.start = start;