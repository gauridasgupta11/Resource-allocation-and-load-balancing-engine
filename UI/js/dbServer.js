var express = require('express');
var app = express();

function sendJson(request, response){
   console.log('User connected');
   var jsonEx = '{ "cells":[{"Storage": 200.0, "RAM": 300.0, "Bandwidth": 20.0, "Device": 3.0}]}';
   response.type('application/json');
   response.setHeader(	'Content-Type','application/javascript');
    response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   response.send(JSON.stringify(jsonEx));
}

 

app.use(express.static(__dirname+ '/'));

app.get("/data",sendJson);  // defining data as the get endpoint instead of root

app.listen(8081);
console.log("listening on port 8081");

