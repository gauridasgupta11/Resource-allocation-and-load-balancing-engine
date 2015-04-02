var mysql = require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function (request,response){

	console.log("in create server ");
	var formdata = "";
	request.on("data", function(data){
		formdata += data;
		console.log("in req.on func ");
	});
	
	request.on('end', function(){
		console.log("in req.on end func");

		var dataObj = JSON.parse(formdata);
		var firstname = JSON.stringify(dataObj.firstname);
		var lastname = JSON.stringify(dataObj.lastname);
		var email = JSON.stringify(dataObj.email);
		var password1 = JSON.stringify(dataObj.password1)

		function db1(){
			var connection = mysql.createConnection( {host: 'localhost', user: 'root', password: 'root', port: 3305, database: 'test'}); return connection;}
			var objectDataB = db1();
			console.log("in db1 method..connection establshd ");

			objectDataB.query("INSERT INTO cloudregistration(firstname, lastname, email, password1) VALUES ('"+firstname+"','"+lastname+"','"+email+"','"+password1+"');", function(err){
				objectDataB.end();

				if(err) {
					console.log(error.message);
					response.writeHead(400, {'Content-Type': 'text/plain'}).end();
					request.connection.destroy();
				}
				else{
					console.log("success");
					response.writeHead(	200, {
						'Content-Type': 'text/plain',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET,POST'
					});

					response.end("User Details stored successfully");
				}
			});
		});
}).listen(8800);
console.log("server is listening to port 8800");		
