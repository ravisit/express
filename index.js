var express = require('express');
var app = express();

var route = require('./route')

app.use('/', route);

app.listen(3000);