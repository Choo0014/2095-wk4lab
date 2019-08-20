let express = require('Express');
let app = express();
let router = require('./router.js');

let db = [];
let newId= Math.round(Math.random()*1000)

let rec = {
    id: getNewRandomId(),
    name: 'Tim',
    quantity: 23,
    price: 'Mel'
};


app.get('/newItem/:name/:quantity/:price',function(req,res){
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

function getNewRandomId(){
    let id;
    id = Math.round(Math.random()*1000); //gives between 0 and 1, multiply by 1000. rounds to nearest integer
    return id;

}

app.use('/', router);

app.listen(8080);