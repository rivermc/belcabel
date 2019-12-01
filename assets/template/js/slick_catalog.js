$(document).ready(function() {

    $('.js_slick').on('init', function(event, slick, currentSlide, nextSlide) {
        FastBuy('.js_fastbuy_button');
    });

    $('.js_slick .callback').remove();

    $('.js_slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: false,
        speed: 300,
        prevArrow:"<div class='slick-prev slick-arrow'></div>",
        nextArrow:"<div class='slick-next slick-arrow'></div>",

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }).on('breakpoint', function(event, slick, currentSlide, nextSlide) {
        priceChanger.events();
        FastBuy('.js_fastbuy_button');
    });
});