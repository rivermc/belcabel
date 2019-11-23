$(document).ready(function() {

    $('.slider_wrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        appendDots: $('.slider_dots'),
        customPaging : function() {
            return '<a class="dot js_no_preload"></a>';
            },
        dots: true,
        autoplay: true,
        prevArrow: "<div class='slick-prev slick-arrow'></div>",
        nextArrow: "<div class='slick-next slick-arrow'></div>"
    });

});