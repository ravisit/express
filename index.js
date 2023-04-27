var express = require('express');
var app = express();

var route = require('./route');
var dynamicRoute = require('./dynamicRoutes');

//First middleware before response is sent
app.use(function(req, res, next){
   console.log('Middle-ware Start');
   next();
})

//Route handler
app.use('/', route);

app.use('/', dynamicRoute);



app.listen(3000);