let express = require('express');
let router = express.Router();

let db = [];


router.get('/', function (req, res) {
    res.send('FIT2095 Week 4 lab');
});

router.get('/newItem/:name/:quantity/:price', function (req, res) { //user input their items

    let newId = getNewRandomId();
    let newName = req.params.name;
    let newQuantity = parseInt(req.params.quantity);
    let newPrice = parseInt(req.params.price);

    let obj = {
        itemId: newId,
        itemName: newName,
        itemQuantity: newQuantity,
        itemPrice: newPrice
    };

    console.log(req.params);
    // console.log(req.params.name); //to access the name
    // console.log(req.params.quantity); //to access the quantity
    // console.log(req.params.price); //to access the price
    console.log(obj);
    db.push(obj);
    res.send("Your input has been save to the database.");
    console.log(db);

});

router.get('/listAll', function (req, res) { //listing all the items in the database
    res.send(generateList());
}); 

router.get('/deleteItem/:inputItemId', function (req, res) { // /: represents a variable - a parameter

    let search = false;
    let msg = "";
    let trashId = parseInt(req.params.inputItemId);

    console.log(req.params);

    for (let i = 0; i < db.length && !search; i++) { //iterates between 0 and no found. Once found, found becomes TRUE
        if (db[i].itemId === trashId) {
            db.splice(i, 1);                            //db =.... (big mistake)
            search = true;
            msg = "Item: " + trashId + " has been deleted."
            console.log(db);
        }

    }


    if (search === false) {
        msg = "Error! The item's ID could not be found..."
    }
    res.send(msg);


});

router.get('/totalValue', function(req, res){
    total = 0;
    for (index = 0; index < db.length; index++) {
        total += db[index].itemPrice*db[index].itemQuantity
    }
    res.send("Total warehouse value: " + total);

});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getNewRandomId() {
    let id;
    id = Math.round(Math.random() * 1000); //gives between 0 and 1, multiply by 1000. rounds to nearest integer
    return id;

}

function generateList() {
    let st = "ID     Item    Quantity    Price   Cost</br>";
    for (let i = 0; i < db.length; i++) {
        let itemCost = db[i].itemQuantity * db[i].itemPrice;
        st += db[i].itemId + " | " + db[i].itemName + " | " + db[i].itemQuantity + " | " + db[i].itemPrice + " | " + itemCost + "</br>";

    }
    return st;
}

//export this router 
module.exports = router;