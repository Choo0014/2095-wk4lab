let express = require('Express');
let app = express();
//let router = require('./router.js');

let db = [];
let newId = Math.round(Math.random() * 1000)

let rec = {
    id: getNewRandomId(),
    name: 'Tim',
    quantity: 23,
    price: 'Mel'
};


app.get('/', function (req, res) {
    res.send('FIT2095 Week 4 lab');
});

app.get('/newItem/:name/:quantity/:price', function (req, res) {


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

app.get('/listAll', function (req, res) {
    let table = generateList();
    res.send(table);
}); //if an app gets this pathname it will respond with this response

app.get('/deleteItem/:inputItemId', function (req, res) { // /: represents a variable - a parameter
    //if a request arrives that matches this statement, execute this:
    let search = false;
    let msg = "";
    let trashId = parseInt(req.params.inputItemId);

    console.log(req.params);

    for (let i = 0; i < db.length && !search; i++) { //iterates between 0 and no found. Once found, found becomes TRUE
        if (db[i].itemId === trashId) {
            db = db.splice(i, 1);
            search = true;
            msg = "Item: " + trashId + " has been deleted."
        }

    }


    if (search === false) {
        msg = "Error! The item's ID could not be found..."
    }
    res.send(msg);


});

app.get('/totalValue', (req, res) => {
    let value = 0;
    db.forEach(element => {
        value += parseInt(element.quantity * element.price);

    })
    res.send('Warehouse total value: ' + value);
})



function deleteItem(itemId) {
    db.splice(itemId, 1);
}


function getNewRandomId() {
    let id;
    id = Math.round(Math.random() * 1000); //gives between 0 and 1, multiply by 1000. rounds to nearest integer
    return id;

}

function generateList() {
    let st = "Index" + "| " + "ID" + " | " + "Name" + " | " + "Quantity" + " | " + "Price" + " | " + "Cost" + "</br>" + "</br>";
    for (let i = 0; i < db.length; i++) {
        let itemCost = db[i].itemQuantity * db[i].itemPrice;
        st += (i) + " - " + db[i].itemId + " | " + db[i].itemName + "|" + db[i].itemQuantity + "|" + db[i].itemPrice + "|" + itemCost + "</br>";

    }
    return st;
}

//app.use('/', router);

app.listen(8080);