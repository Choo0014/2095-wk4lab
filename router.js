let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
   res.send('FIT2095 Week 4 lab');
});



router.get('/about', function(req, res){
   res.send('This page is about FIT2095');
});

//export this router 
module.exports = router;