$(document).ready(function () {

    var isActive = false;
    console.log(isActive);


    $('.js-menu').on('click', function () {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
            $('.navbar-inverse').css('height', '90px');
            console.log(isActive);
        } else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
            $('.navbar-inverse').css('height', '100%');
            console.log(isActive);

        }
        isActive = !isActive;
    });

    $("#contact").click(function () {
        console.log("clicked log");
        $('html, body').animate({
            scrollTop: $("#contactUs").offset().top
        }, 2000);

        if ($(window).width() < 767) {
            $('.js-menu').removeClass('active');
            $('body').removeClass('menu-open');
            $('.navbar-inverse').css('height', '85px');
            isActive = !isActive;

            console.log(isActive); 
        }     
    });
});

$(".connectClick").click(function () {
    $(".connectLinks").slideToggle('show');
});