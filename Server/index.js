var http = require("http");
var mysql = require("mysql");
var express = require("express");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.createServer(function(req, res){
    console.log("Accessed!");
    res.writeHead(200, {
        "Content-Type":"text/plain",
        "Access-Control-Allow-Origin":"*"
    });
    res.end("helloWorld!");
}).listen(1234);