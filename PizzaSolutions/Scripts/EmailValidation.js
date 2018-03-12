
$('.submit').click(function (e) {
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
       document.getElementById('success').innerHTML = "";
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

////Function to validate phone
$('.submit').click(function (e) {
        if (validatePhone('Phone')) {
            $('#spnPhoneStatus').html('Valid');
            $('#spnPhoneStatus').css('color', 'green');

        }
        else {
            $('#spnPhoneStatus').html('Invalid');
            $('#spnPhoneStatus').css('color', 'red');
            e.preventDefault();
        }       
});

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /(\d{3})\-?(\d{3})\-?(\d{4})/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function () {
    $("input[name='Phone']").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));
    });
});
