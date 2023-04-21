var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello World!');
});

app.get('/home', (req, res)=>{
   res.send('Welcome to Express!')
})

app.listen(3000);