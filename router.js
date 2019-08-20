let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
   res.send('FIT2095 Week 4 lab');
});

router.get('/addItem/:name/:quantity/:price',function(req,res){
    console.log(req.params.name); //to access the name
    console.log(req.params.quantity); //to access the quantity
    console.log(req.params.price); //to access the price
    let newId = getNewRandomId();
    let obj = {id:newId,itemName:name,itemQuantity:parseInt(req.params.quantity),itemPrice:parseInt(req.params.price)};
    console.log(obj);
    db.push(obj);
    res.send("Your input has been save to the database.");
    console.log(db);


});

router.get('/about', function(req, res){
   res.send('This page is about FIT2095');
});

//export this router 
module.exports = router;