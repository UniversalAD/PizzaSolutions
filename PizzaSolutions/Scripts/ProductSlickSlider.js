$(document).ready(function () {
        $('.shirts').slick({
            dots: false,
            infinite: true,
            lazyLoad: 'ondemand',
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    $("#cups-slide").click(function () {
        //$('.cups').slick({
        //    dot: false,
        //    infinite: true,
        //    lazyload: 'ondemand',
        //    speed: 300,
        //    slidesToScroll: 1,
        //    slidesToShow: 4
        //});
    });

    $("#totes-slide").click(function () {
        $('.totes').slick({
            dot: false,
            infinite: true,
            lazyload: 'ondemand',
            speed: 300,
            slidesToScroll: 1,
            slidesToShow: 4
        });
    });

    $("#koosie-slide").click(function () {
        //('.koosie').slick({
        //    dot: false,
        //    infinite: true,
        //    lazyload: 'ondemand',
        //    speed: 300,
        //    slidesToScroll: 1,
        //    slidesToShow: 4
        //});
    });
});
