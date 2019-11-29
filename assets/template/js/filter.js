'use strict';

function getUrlParam(param) {
    return (new URL(document.location)).searchParams.get(param);
}

function FilterCatalog() {
    $('.js_filter_catalog').toggleClass('js_visible', false);
    $('.js_filter_target.parent input:not([disabled])').each((index, item) => {
        var id = parseInt($(item).val());
        var checked = $(item).is(':checked');
        var category_item = $('.js_filter_catalog[data-id='+ id +']');
        category_item.toggleClass('js_visible', true).toggleClass('js_active', checked);
    });
}

function PriceLayout() {
    let layout = getUrlParam('price_layout');
    if (layout) {
        if (!$(`.js_price_changer[data-id=${layout}]`).hasClass('hidden')) {
            $(`.js_price_changer[data-id=${layout}]`).trigger('click');
            $(`#price_layout input[value=${layout}]`).trigger('click');
        }
    }
}

/*
function TplLayout() {
    let layout = getUrlParam('tpl');
    if (layout) {
        $('#tpls input[value='+ layout +']').trigger('click');
    }
}
*/

function LimitChanger() {
    $('.js_limit_changer').change(function(){
        let value = $(this).val();
        $('#mse2_limit option').removeAttr('selected');
        $('#mse2_limit option[value=' + value +']').attr('selected', 'selected').change();
    });
}


class FilterEnabled {

    constructor() {
        this.container = $('.js_filter_enabled_target');
        this.input = $('.js_filter_target input[type="checkbox"]');
        this.init();
    }

    init() {
        this.checkFilter();
    }

    checkFilter() {
        var filter_length = this.container.children('button').length;
        var check = filter_length === 0;
        this.container.toggleClass('js_active', check);
    }

    eventsButton(button, id) {
        button.on('click', () => {
            $('#mse2_filters input[data-id='+ id +']').trigger('click');
        });
    }
}

$(document).ready(function() {

    $(document).on('mse2_load', function(e, data) {
        FilterCatalog();
        FastBuy('.js_fastbuy_button');
        PriceLayout();
        OptionsItem();
        Modals();
        basket_count();
    });

    $('.js_filter').click(function(){
        if ($(this).hasClass('js_active')) {
            $(this).siblings('.js_filter_target').slideDown(400);
        }
        else {
            $(this).siblings('.js_filter_target').slideUp(400);
        }
        $(this).toggleClass('js_active');
    });


    $('.js_filter_layout').click(function(){
        var layout = $(this).data('layout');
        $('#tpls input[value='+ layout +']').trigger('click');
    });

    $('.js_filter_reset').click(() => {
        mSearch2.reset();
    });

    FilterCatalog();
    LimitChanger();
    new FilterEnabled();


});