var express = require("express");


var app = express();



app.get("/", function (req, res, next) {

    console.log("reauest is comming to '/' ");

    res.send("Hello world");

});




app.listen(3000, function () {
    console.log('app is running on port', 3000);
});