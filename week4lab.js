let express = require('Express');
let app = express();
let router = require('./router.js');

let db = [];
let newId= Math.round(Math.random()*1000)

let rec = {
    id: newId,
    name: 'Tim',
    quantity: 23,
    price: 'Mel'
};

app.use('/', router);

app.listen(8080);