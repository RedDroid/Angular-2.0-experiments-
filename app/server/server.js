/**
 * Created by vkr on 5/26/2015.
 *
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;


app.get('/', function (req, res) {
    console.log(express.static());
    res.redirect('/index.html');
});

app.use(express.static( __dirname + '/../public'));
//server listening at port
app.listen(port, function () {
    console.log("Server listening at port" + port);
});

