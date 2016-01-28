var express = require('express');
var async = require('async');
var app = express();
var router = express.Router();

app.use(express.static(__dirname));

app.listen(8080);
console.log("App listening on port 8080");