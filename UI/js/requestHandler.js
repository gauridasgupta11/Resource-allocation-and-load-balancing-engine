
var mysql = require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function (request,response){

	console.log("in create server ");
	var formdata = "";
	request.on("data", function(data){
		formdata += data;
		console.log("in req.on func ");
		console.log("form data is "+formdata);

		if(formdata.length > 1e6) {
			formdata = "";
			response.writeHead(413, {'Content-Type': 'text/plain'}).end();
			request.connection.destroy();
		}

	});

	
	request.on('end', function(){
		console.log("in req.on end func1");
		try {
			var dataObj = JSON.parse(formdata);
			var storage = JSON.stringify(dataObj.storage);
			var memory = JSON.stringify(dataObj.memory);
			var device = JSON.stringify(dataObj.device);
			var network = JSON.stringify(dataObj.network)

		}
		catch(err)
		{
			console.log("error with json.parse"+err);
		}


		function db1(){
			var connection = mysql.createConnection( 
				{
					host: 'localhost',
					 user: 'root', 
					 password: 'root', 
					 port: 3305, 
					 database: 'test'
				}); 
			return connection;
		}
		var objectDataB = db1();
		console.log("in db1 method..connection establshd ");

		objectDataB.query("INSERT INTO userresources(storage, memory, device, network) VALUES ("+storage+", "+memory+",'"+device+"',"+network+");", function (err){
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
}).listen(8888);
console.log("server is listening to port 8888");		
