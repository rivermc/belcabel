/* ----------------------------------------------------------------------- */
// Basket count
/* ----------------------------------------------------------------------- */
function round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision/2);
    return y - (y % (precision === undefined ? 1 : +precision));
}


function countBasket(event) {
    var $_this = $(event.currentTarget);
    if (event.type === 'click') {
        var direction = $_this.data('direction');
        $_this = $_this.siblings('input');
    }

    var $price_parent = $_this.parents($_this.data('parent'));
    var $price_target = $('.js_price_charger_target', $price_parent);
    var product_price = $price_target.data('price');
    var price_count = $_this.data('price-count');
    var input_val = parseInt($_this.val());

    if (!price_count) {
        price_count = 1;
    }

    input_val = round_to_precision(input_val, price_count);

    if (event.type === 'click') {
        if (direction === '+') {
            input_val += price_count;
        }
        else {
            input_val -= price_count;
        }
    }

    if (input_val < price_count) {
        input_val = price_count;
    }
    $_this.val(input_val);
    $price_target.html((product_price * input_val).toFixed(1));
}



function basket_count() {
    var $button = $('.js_count_button');
    var $input = $('.js_form_count_input');

    $button.unbind('click');
    $input.unbind('change');

    $input.on('change', function(event) {
        countBasket(event);
    });

    $button.on('click', function(event) {
        countBasket(event);
    });
}


$(document).ready(function() {
    basket_count();
});
