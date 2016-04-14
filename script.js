function emailChk() {
	var x = document.getElementById('txtEmail').value;
	if (x == "") {
		alert("Email field can't be blank...");
		document.getElementById('txtEmail').focus();
		return false;
	}
}

function contChk() {
	var x = document.getElementById('ctxtName').value;
	var y = document.getElementById('ctxtEmail').value;
	var z = document.getElementById('ctxtMessage').value;

	if (x == "") {
		alert("Name cannot be empty!!");
		document.getElementById('ctxtName').focus();
		return false;
	} 
	else if (y == "") {
		alert("Email cannot be empty");
		document.getElementById('ctxtEmail').focus();
		return false;
	}
	else if (z == "") {
		alert("Please don't send us empty emails");
		document.getElementById('ctxtMessage').focus();
		return false;
	}

	alert("Your message is recieved. We will contact you soon.");
}