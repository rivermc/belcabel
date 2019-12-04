/* ----------------------------------------------------------------------- */
// Basket count
/* ----------------------------------------------------------------------- */

function basket_count() {
    let button = $('.js_count_button');
    let input = $('.js_form_count_input');

    button.unbind('click');
    input.unbind('change');

    input.on('change', function() {
        var $input = $(this);
        var $price_parent = $input.parents($input.data('parent'));
        var product_price = $('.js_price_charger_data', $price_parent).data('price');
        var $price_target = $('.js_price_charger_target', $price_parent);
        var input_val = parseInt($input.val());
        $price_target.html((product_price * input_val).toFixed(1));

    });

    button.on('click', function() {
        var $current_button = $(this);
        var $input = $current_button.siblings('input');
        var $price_parent = $current_button.parents($current_button.data('parent'));
        var input_val = parseInt($input.val());
        var product_price = $('.js_price_charger_data', $price_parent).data('price');
        var $price_target = $('.js_price_charger_target', $price_parent);

        if ($(this).hasClass('js_plus')) {
            $input.val(input_val + 1);
        }
        else {
            input_val = input_val - 1;
            if (input_val < 1) {
                input_val = 1;
            }
            $input.val(input_val);
        }

        input_val = parseInt($input.val());
        $price_target.html((product_price * input_val).toFixed(1));
    });
}


$(document).ready(function() {

    basket_count();

});
