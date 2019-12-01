function OptionsItem() {
  $('.js_options_button').click(function(e) {
    $('.js_options_target').removeClass('js_active');
    e.preventDefault();
    var $target = $(this).parent().parent().find('.js_options_target');
    $target.toggleClass('js_active');
  });
}

$(document).ready(function() {
  OptionsItem();
});