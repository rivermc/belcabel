/* ----------------------------------------------------------------------- */
/* Fast buy */
/* ----------------------------------------------------------------------- */

function FastBuy(elem) {

    $(elem).magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 400,

        callbacks:  {
            beforeOpen: function() {
                var productID = $(this.st.el).data('id');
                var productPagetitle = $(this.st.el).data('title');

                getModule('Chunk', 'FastBuy', 'id => ' + productID + ', pagetitle => ' + productPagetitle, function (data) {
                    $('.fastbuy_modal').html(data);

                    $('input[name=phone], input[name=phoneShipping]').usPhoneFormat({format: 'x-xxx-xxx-xxxx'});



                    $('.fastbuy_form').submit(function(e){
                        e.preventDefault();
                        var msg = $(this).serialize();
                        var url = '/assets/template/php/fastBuy.php';
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: msg,
                            dataType: "json",
                            success: function(data) {
                                if (data.success){
                                    miniShop2.Message.success(data.message);
                                    if (data.order){
                                        setTimeout(() => {
                                            window.location.href = "/cart?msorder=" + data.order;
                                        }, 1000);
                                    }
                                }
                                else {
                                    miniShop2.Message.error(data.message);
                                    if (data.fields) {
                                        var errors = data.fields;
                                        errors.forEach(function(item) {
                                            $('.fastbuy_modal [name=' + item + ']').addClass('shake').delay(800).queue(function(next){ $('.fastbuy_modal [name=' + item + ']').removeClass('shake');  next(); });
                                        });
                                    }
                                }
                            }
                        });
                    });
                });

            },
            open: function() {
            },
            close: function() {
            }
        }
    });
}

$(document).ready(function() {

    setTimeout( () => {
        FastBuy('.js_fastbuy_button');
    }, 1000);
});
