var userResources;
var httpRequest;
var s1 = document.getElementById("storage");
var m1 = document.getElementById("memory");
var d1 = document.getElementById("device");
var n1 = document.getElementById("network");

function sendToServer(){
	console.log("in store data func");
	userResources = {

		storage : s1.options[s1.selectedIndex].value,

		memory : m1.options[m1.selectedIndex].value,

		device : d1.options[d1.selectedIndex].value,

		network : n1.options[n1.selectedIndex].value

	};
	console.log("userresources: "+JSON.stringify(userResources));
	console.log("in store data func end ");
	handleButtonRequest();
	console.log("in store data func checkng vl"+userResources);
}

function handleButtonRequest(e){
	//e.preventDefault();
	console.log("in handl req func");

	try
	{
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = handleResponse;
		httpRequest.open("POST", "http://localhost:8888/requestHandler.js",true);
		httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		httpRequest.send(JSON.stringify(userResources));
		console.log("in handle req try func");
	}
	catch(err)
	{
		console.log("Error is"+err);
	}
}
function handleResponse(e){
	console.log("in handle response func");

	if(httpRequest.readyState == 4 && httpRequest.status == 200)
	{
		console.log(httpRequest.responseText);
	}
}