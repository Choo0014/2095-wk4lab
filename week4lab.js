let express = require('Express');
let app = express();
let router = require('./router.js');

app.use('/', router);
app.listen(8080);
console.log("Listening on port 8080...")