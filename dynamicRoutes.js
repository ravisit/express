var express = require('express');
var router = express.Router();

router.get('/:id([0-9]{5})', (req, res)=>{
    res.send('The id you used are '+ req.params.id);
});

router.get('/:name/:id([0-9])', (req, res) =>{
    res.send('The name you used are '+req.params.name+'.'+ 'The id is '+req.params.id);
});

router.get('*', (req, res) =>{
    res.send('Sorry, this is invalid url');
})

module.exports = router;