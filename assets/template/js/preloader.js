/* ----------------------------------------------------------------------- */
/* Preloader Disable Hook */
/* ----------------------------------------------------------------------- */

setTimeout(function() {
    var preloader = $('.preloader');
    if (preloader.hasClass('active')) {
        preloader.css({'opacity': '0', 'visibility' : 'hidden'}).removeClass('active');
    }
} , 2000);

/* ----------------------------------------------------------------------- */
/* Preloader */
/* ----------------------------------------------------------------------- */

$(document).ready(function() {
    var preloader = $('.preloader');
    preloader.removeClass('active');


    preloader.click(function() {
        preloader.css({'opacity': '0', 'visibility' : 'hidden'});
    });


    $('a:not(".js_no_preload")').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        preloader.css({'opacity': '1', 'visibility' : 'visible'});
        setTimeout(() => {
            window.location.href = href;
        },200);
    });
});
    

