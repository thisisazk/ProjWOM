function emailChk() {
	var x = document.getElementById('txtEmail').value;
	if (x == "") {
		alert("Email field can't be blank...");
		document.getElementById('txtEmail').focus();
		return false;
	}
}