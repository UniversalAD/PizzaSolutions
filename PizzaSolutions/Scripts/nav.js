$(document).ready(function () {

    console.log(isActive);
    var isActive = false;

    $('.js-menu').on('click', function () {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
            $('.navbar-inverse').css('height', '85px');
        } else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
            $('.navbar-inverse').css('height', '100%');
        }
        isActive = !isActive;
    });
});