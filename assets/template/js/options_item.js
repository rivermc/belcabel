function OptionsItem() {
  $('.js_options_button').click(function(e) {
    var parent = $(this).data('parent');
    var $target = $(this).parents(parent).find('.js_options_target');
    e.preventDefault();

    if ($target.hasClass('js_active')) {
      $target.removeClass('js_active');
    }
    else {
      $('.js_options_target').removeClass('js_active');
      $target.toggleClass('js_active');
    }
  });
}

$(document).ready(function() {
  OptionsItem();
});