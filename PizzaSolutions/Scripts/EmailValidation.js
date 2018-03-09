
$('.submit').click(function (e) {
    console.log("submit click");
    var sEmail = $('#Email').val();
    // Checking Empty Fields
    if ($.trim(sEmail).length == 0 ) {
        e.preventDefault();
    }
    if (validateEmail(sEmail)) {

        document.getElementById("error").innerHTML = "";
        document.getElementById("success").innerHTML = "Email Valid!";

    }
    else {
        document.getElementById("error").innerHTML = "Invalid Email"
        e.preventDefault();
    }
   
});

// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

//Function to validate phone
$(document).ready(function () {
    $('#Phone').blur(function (e) {
        if (validatePhone('Phone')) {
            $('#spnPhoneStatus').html('Valid');
            $('#spnPhoneStatus').css('color', 'green');
        }
        else {
            $('#spnPhoneStatus').html('Invalid');
            $('#spnPhoneStatus').css('color', 'red');
        }
    });
});

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^\d{10}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}