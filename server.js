var express = require("express");
var mongoose = require("mongoose");

var app = express();
var port = (process.env.PORT || 3000);


app.get("/", function (req, res, next) {
    console.log("reauest is comming to '/' ");
    res.send("Hello world");
});

app.listen(port, function () {
    console.log('app is running on port', port);
});

mongoose.connect("mongodb://malikasinger:pakistan1@ds149049.mlab.com:49049/malikasinger-demo");

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});