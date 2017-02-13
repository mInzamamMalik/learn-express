var express = require("express");


var app = express();

var port = (process.env.PORT || 3000);


app.get("/", function (req, res, next) {

    console.log("reauest is comming to '/' ");

    res.send("Hello world");

});




app.listen(port, function () {
    console.log('app is running on port', port);
});