var http = require('http');


http.createServer(function (request, response) {
	console.log('request starting...');

	var reqData = '';

	request.on('data', function(data) {
		reqData += data;
		//If the size of formData is too large i.e. in case of buffer overflow attack kill the connection.
		if(reqData.length > 1e6) {
			reqData = "";
			response.writeHead(413, {'Content-Type': 'text/plain'}).end();
			request.connection.destroy();
		}
	});

	request.on('end', function() {

		var objDet = JSON.parse(reqData);
		// Read values from JSON object to be inserted into the database.

		var location = JSON.stringify(objDet.location);
		var memory = JSON.stringify(objDet.memory);
		var storage = JSON.stringify(objDet.storage);
		var CPU = JSON.stringify(objDet.CPU);
		console.log("Request recieved: location = "+location+" memory = "+memory+" storage = "+storage+" CPU = "+CPU);

		console.log('success');
		response.writeHead(200, {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin' : '*',
			'Access-Control-Allow-Methods': 'GET,POST'
		});
		//Note here we are listening to port 8081 while client runs on port 8080, hence in order to avoid Cross Domain Security Issue CORS is used.
		//Due to this reason, response header must contain Access-Control-Allow-Origin
		response.end("Instance id: 1");
	});
			
}).listen(8081);
console.log('Server running at http://localhost');

