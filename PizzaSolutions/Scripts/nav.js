$(document).ready(function () {

    var isActive = false;
    console.log(isActive);


    $('.js-menu').on('click', function () {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
            $('.navbar-inverse').css('height', '90px');
            $(".border-bottom").show();
            $(".navbar").css("overflow", "inherit");
        }

        else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
            $('.navbar-inverse').css('height', '100%');


            if ($(window).width() < 767) {
                $('.navbar').css("overflow", "scroll");
                $('.border-bottom').hide();
            }


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
            $(".navbar").css("overflow", "inherit");
            $(".border-bottom").show();
            isActive = !isActive;

            console.log(isActive);
        }
    });

    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        }
        else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });
});

$(".connectClick").click(function () {
    $(".connectLinks").slideToggle('show');
});