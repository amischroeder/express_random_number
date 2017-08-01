var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/random', function(req, res){
    res.send('hodor hodor');
});

app.listen(port, function(){
    console.log('listening on port', port);
});

function randomNumber() {
            return Math.floor(Math.random() * (1 + 2 - 0) + 0);
        }
console.log(randomNumber());