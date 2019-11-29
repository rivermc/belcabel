function OptionsItem() {
  $('.js_options_button').click(function() {
    var product_id = $(this).data('id');
    var product_title = $(this).data('title');
    getModule('Chunk', 'OptionsItem', 'id => ' + product_id,function (data) {
      var close_button = $('<div class="close_button mfp-close"></div>');
      var title = '<h2 class="h1 page_title">Характеристики <span class="sub">'+ product_title +'</span></h2>';
      var properties_wrap = $('<div class="properties_wrap">').append(title).append(data);
      var data_import = $(close_button).add(properties_wrap);
      $('.js_options_target').html(data_import);
    });
  });
}

$(document).ready(function() {
  OptionsItem();
});