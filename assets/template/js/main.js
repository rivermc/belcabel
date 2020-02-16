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

function animation_shake(element) {
    element.addClass('shake').delay(800).queue(function(next){ element.removeClass('shake');  next(); });
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


    $('.js_left_toggle').click(function() {
        if ($(this).hasClass('js_active')) {
            $(this).toggleClass('js_active button button_svg');
            $('.js_left_toggle_target').slideDown();
        }
        else {
            $('.js_left_toggle_target').slideUp(() => {
                $(this).toggleClass('js_active button button_svg');
            });
        }
    });

    if (window.innerWidth <= 768) {
        $('.js_left_toggle').trigger('click');
    }

    $('.js_header_menu_closer').click(function(){
        $('.js_header_menu_target').slideUp(400);
    });
    $('.js_header_menu_opener').click(function(){
        $('.js_header_menu_target').slideDown(400);
    });


    miniShop2.Callbacks.Cart.change.response.success = function(response) {
        $('.cart_count').text(response.data.total_count);
    };

    miniShop2.Callbacks.Cart.add.response.success = function(response) {
        $('.cart_count').text(response.data.total_count);
    };
    miniShop2.Callbacks.Cart.remove.response.success = function(response) {
        $('.cart_count').text(response.data.total_count);
    };
    miniShop2.Callbacks.Order.submit.response.error = function(response) {
        var error_array = response.data;
        $('.error_message').remove();
        error_array.forEach(function(item) {
            $('input[name='+ item +']').after('<span class="error_message">' + response.message +'</span>');
            $('html, body').animate({
                scrollTop: $(".js_order_error_target").offset().top
            }, 400, function () {
                animation_shake($('input[name='+ item +']'));
            });
        })
    };
});

  