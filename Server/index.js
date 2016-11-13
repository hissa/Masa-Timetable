var express = require("express");
var mysql = require("mysql");
var Database = require("./database.js");
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "masa-timetable"
});
connection.connect(function(err){
    if(err){
        console.error("error connecting: "+ err.stack);
        return;
    }
    console.log("Connected to Database.");
});

var database = new Database(connection);

var server = app.listen(1234, function () {
    console.log("Server Running at port 1234.");
});

app.get("/request", function (req, res, next) {
    database.getTask(3, function(result){
        console.log(result[0].remarks);
    });
    res.send("done.");
});

app.get("/insert", function (req, res, next) {

});

app.get("/delete", function (req, res, next) {

});

app.get("/edit", function (req, res, next) {

});