var express = require('express');
var app = express();

var route = require('./route');
var dynamicRoute = require('./dynamicRoutes');

app.use('/', route);

app.use('/', dynamicRoute);

app.listen(3000);