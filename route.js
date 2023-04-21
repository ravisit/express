var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello World!');
});

router.get('/home', (req, res)=>{
    res.send('Welcome to Express!');
 });

 module.exports = router;