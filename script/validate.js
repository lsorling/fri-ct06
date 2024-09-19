/*
lesson 11 html form and js validation
*/
function validate() {
    //alert("i got here");
    let num = document.getElementById("contactNumber");

    if (num.value.length > 0) {
        num.classList = "form-control";
        // hide the error by using d-none
        document.getElementById("contactNumValidation").classList = "text-danger d-none";
    } else {
        console.log("it is blank")
        // it is blank
        // show the red outline by using is-invalid
        num.classList = "form-control is-invalid";
        // show the error
        document.getElementById("contactNumValidation").classList = "text-danger";
    }
}