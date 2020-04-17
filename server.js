var express = require('express');
var app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send('Hello World');
    response.end();
});


app.listen(3000, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log("Server is running on port " + port);
    }
});