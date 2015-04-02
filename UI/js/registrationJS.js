var userDetails;
var httpRequest;

function isEmailValid(email) {
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var email = document.getElementById("email");
			if (email.value.match(re)) {
				/*alert("valid email");*/
				return true;
			} else {
				//alert("please enter a valid email address");
				//email.focus();
				return false;
			}

		};

	function validatePassword() {

			var regex = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{2})([A-Za-z0-9\d#$@!%&*?]{7,24})/;
			var regex1 = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{3,5})([A-Za-z0-9\d#$@!%&*?]{8,24})/;
			var regex2 = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{6,19})([A-Za-z0-9\d#$@!%&*?]{11,24})/;
			var password1 = document.getElementById("password1").value;

			if (!regex.test(password1)) {
				//alert("password must contain minimum 3 upper case, 2 lower case and 2 special characters");
			} else {
				document.getElementById("progress").value = 33;
			}

			if (!regex1.test(password1)) {
			} else {
				document.getElementById("progress").value = 66;
			}

			if (!regex2.test(password1)) {
			} else {
				document.getElementById("progress").value = 100;
			}

		};

		function matchPassword() {

			var password1 = document.getElementById("password1").value;
			var password2 = document.getElementById("password2").value;

			if (password1 == password2) {
				/*alert("password matches");*/

			} else {
				//alert("password dosent match");
			}

		};

function storeData(){
	console.log("in store data func");
	 userDetails = {
		firstname : document.getElementById("firstname").value,
		lastname : document.getElementById("lastname").value,
		email :  document.getElementById("email").value,
		password1 : document.getElementById("password1").value
	};
	
	handleButtonRequest();
	//window.location.href = "login.html";
	//console.log("in store data func checkng vl"+JSON.stringify(userDetails));
}

function handleButtonRequest(e){

		console.log("in request func");
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = handleResponse;
		httpRequest.open("POST", "http://localhost:8800/servernew.js",true);
		//httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		httpRequest.send(JSON.stringify(userDetails));
}
function handleResponse(){
		console.log("in handle response func");

	if(httpRequest.readyState == 4 && httpRequest.status == 200)
	{	
		console.log(httpRequest.responseText);
		window.location.href = "login.html";
	}
}

