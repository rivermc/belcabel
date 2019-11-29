
/* ----------------------------------------------------------------------- */
/* Preloader Disable Hook */
/* ----------------------------------------------------------------------- */

setTimeout(function() {
    let preloader = $('.preloader');
    if (preloader.hasClass('active')) {
        preloader.css('opacity', '0').delay(500).queue( (next) => {
            preloader.css('display', 'none').removeClass('active');
            next();
        });
    }
} , 2000);

/* ----------------------------------------------------------------------- */
/* Preloader */
/* ----------------------------------------------------------------------- */

$(document).ready(function() {


    let preloader = $('.preloader');

    setTimeout(() => {
        preloader.css('opacity', '0').delay(400).queue( (next) => {
            preloader.css('display', 'none').removeClass('active');
            next();
        });
    }, 400);


    preloader.click(function() {
        $(this).css('display', 'none').removeClass('active');
    });


    $('a').click(function(e) {
        if (!$(this).hasClass('js_no_preload')) {
            e.preventDefault();
            let href = $(this).attr('href');
            setTimeout(() => { window.location.href = href; },400);
            preloader.css('display', 'block').delay(100).queue((next) => {
                preloader.css('opacity', '1');
                next();
            });
        }
    });
});
    

