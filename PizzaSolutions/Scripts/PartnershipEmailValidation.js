
$('#submit').click(function (e) {
    var sEmail = $('#PartnershipEmail').val();
    // Checking Empty Fields
    if ($.trim(sEmail).length === 0 ) {
        e.preventDefault();
    } 

   if (validateEmail(sEmail)) {

        document.getElementById("Parterror").innerHTML = "";
        document.getElementById("Partsuccess").innerHTML = "Email Valid!";

    }
   else {
       document.getElementById('Partsuccess').innerHTML = "";
        document.getElementById("Parterror").innerHTML = "Invalid Email"
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
$('#submit').click(function (e) {
        if (validatePhone('PartnershipPhone')) {
            $('#spnPartPhoneStatus').html('Valid Phone');
            $('#spnPartPhoneStatus').css('color', 'green');

        }
        else {
            $('#spnPartPhoneStatus').html('Invalid Phone');
            $('#spnPartPhoneStatus').css('color', 'red');
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
    $("input[name='PartnershipPhone']").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));
    });
});
