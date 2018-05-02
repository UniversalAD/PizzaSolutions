
////Function to validate phone
$("#emailContact").on('submit', function (e) {
    var isValid = $("#emailContact").valid();
    if (isValid, validatePhone('Phone')) {

        return true;
    }
    else {     
        e.preventDefault();
        return false;
    }
});

$("#freeAdContact").on('submit', function (e) {
    var isValid = $("#freeAdContact").valid();
    if (isValid, validatePhone('AdPhone')) {

        return true;
    }
    else {      
        e.preventDefault();
        return false;
    }
});

$("#partnershipAgreement").on('submit', function (e) {
    var isValid = $("#partnershipAgreement").valid();
    if (isValid, validatePhone('PartnershipPhone')) {

        return true;
    }
    else {
        e.preventDefault();
        return false;
    }
});

$("#productForm").on('submit', function (e) {
    var isValid = $("#productForm").valid();
    if (isValid, validatePhone('ProductPhone')) {
        return true;
    }
    else {
        e.preventDefault();
        return false;
    }
})

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

//free ad email form
$(document).ready(function () {
    $("input[name='AdPhone'").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));

        if (validatePhone('AdPhone')) {
            $('#adPhoneStatus').html('Valid Phone');
            $('#adPhoneStatus').css('color', 'green');
        }

        else {
            $('#adPhoneStatus').html('Invalid Phone');
            $('#adPhoneStatus').css('color', 'red');
        }     
    });
});

//email contact form
$(document).ready(function () {
    $("input[name='Phone']").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));

        if (validatePhone('Phone')) {
            $('#spnPhoneStatus').html('Valid Phone');
            $('#spnPhoneStatus').css('color', 'green');
        }

        else {
            $('#spnPhoneStatus').html('Invalid Phone');
            $('#spnPhoneStatus').css('color', 'red');
        }
    });
});

//partnership phone form
$(document).ready(function () {
    $("input[name='PartnershipPhone']").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));

        if (validatePhone('PartnershipPhone')) {
            $('#partnershipPhoneStatus').html('Valid Phone');
            $('#partnershipPhoneStatus').css('color', 'green');
        }

        else {
            $('#partnershipPhoneStatus').html('Invalid Phone');
            $('#partnershipPhoneStatus').css('color', 'red');
        }
    });
});

//product phone form
$(document).ready(function () {
    $("input[name='ProductPhone']").keyup(function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));

        if (validatePhone('ProductPhone')) {
            $('#productPhoneStatus').html('Valid Phone');
            $('#productPhoneStatus').css('color', 'green');
        }

        else {
            $('#productPhoneStatus').html('Invalid Phone');
            $('#productPhoneStatus').css('color', 'red');
        }
    });
});
