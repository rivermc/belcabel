'use strict';

/* ----------------------------------------------------------------------- */
/* Get Module Function */
/* ----------------------------------------------------------------------- */

function getModule(action, module, params, cb, delimiter = ',') {
    $.ajax({
        type:'POST',
        url:"/assets/template/php/getModule.php",
        data:'action=' + action + '&chunk=' + module + '&params=' + params + '&delimiter=' + delimiter,
        cache:false,
        success:function(data) {
            cb(data);
        }
    });
}


$(document).ready(function() {

    $('.js_filter_catalog_button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('js_active');
        $(this).next().children().toggleClass('js_active');
    });




    $('.msOrder_forms__delivery input').click(function() {
        if ($(this).is('#delivery_2')) {
            $('.msOrder_forms__col_shipping').toggleClass('js_active', true);
        }
        else {
            $('.msOrder_forms__col_shipping').toggleClass('js_active', false);
        }
    });

    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        var target = $('.js_scroll_target');
        if (scroll >= 150 && !target.hasClass('js_active')) {
            target.addClass('js_active');
        }
        else if (scroll < 150 && target.hasClass('js_active')) {
            target.removeClass('js_active');
        }
    });

});

  