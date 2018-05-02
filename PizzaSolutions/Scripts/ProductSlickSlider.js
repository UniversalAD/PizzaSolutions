$(document).ready(function () {
    $('.shirts').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#totes-slide").click(function () {
        $('.totes').not('.slick-initialized').slick({
            dot: false,
            infinite: true,
            lazyload: 'ondemand',
            speed: 300,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $("#cups-slide").click(function () {
        $('.cups').not('.slick-initialized').slick({
            dot: false,
            infinite: true,
            lazyload: 'ondemand',
            slidesToScroll: 1,
            slidesToShow: 4,
            speed: 300,           
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $("#sports-slide").click(function () {
        $('.sports').not('.slick-initialized').slick({
            dot: false,
            infinite: true,
            lazyload: 'ondemand',
            slidesToScroll: 1,
            slidesToShow: 4,
            speed: 300,           
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $("#koosie-slide").click(function () {
        $('.koosies').not('.slick-initialized').slick({
            dot: false,
            infinite: true,
            lazyload: 'ondemand',
            slidesToScroll: 1,
            slidesToShow: 4,
            speed: 300,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});
