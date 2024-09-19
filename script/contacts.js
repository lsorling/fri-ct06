let validate = () => {
	// Fill in the necessary validation here
	//alert("i got here!");

	// checking nameValue field
	let nameField = document.getElementById("nameValue");

	if (nameField.value.length > 0) {
		nameField.classList = "form-control";
		document.getElementById("nameValueError").classList = "text-danger d-none";
	} else {
		nameField.classList = "form-control is-invalid";
		document.getElementById("nameValueError").classList = "text-danger";
	}

	// checking emailValue field
	let emailField = document.getElementById("emailValue");

	if (emailField.value.length > 0) {
		emailField.classList = "form-control";
		document.getElementById("emailValueError").classList = "text-danger d-none";
	} else {
		emailField.classList = "form-control is-invalid";
		document.getElementById("emailValueError").classList = "text-danger";
	}

	let errors = document.getElementsByClassName("is-invalid");
	if (errors.length == 0) {
		console.log("passed all validations!");
	}
}