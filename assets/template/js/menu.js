$(document).ready(function() {
    $('.js_menu_toggle').click(function(event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var $all_level_menu = $el.closest('ul').find('.submenu ul');
      $all_level_menu.slideUp(400);
      $el.closest('ul').find('.js_menu_toggle').text('+');

      var $sub_menu = $el.parent().next();

      if ($sub_menu.css('display') === 'none') {
        $sub_menu.slideDown(400);
        $el.text('-');
      }
      else {
        $sub_menu.slideUp(400);
        $el.text('+');
      }
    });
 });