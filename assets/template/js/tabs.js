$(document).ready(function() {

  var $content = $('.js_content');
  var content_height = $content.height();
  var content_min_height = '25em';

  if (content_height >= 300) {
    $content.height(content_min_height);
    var more_link = $('<a href="#" class="js_no_preload js_more">Читать полностью</a>');
    more_link.on('click', function(e) {
      e.preventDefault();
      var $el = $(e.currentTarget);
      if ($el.hasClass('js_active')) {
        $content.height(content_min_height);
        $el.removeClass('js_active').text('Читать полностью');
      }
      else {
        $content.height(content_height + 10);
        $el.addClass('js_active').text('Свернуть');
      }
    });

    $content.after(more_link);
  }

  $('.js_tabs_menu').eq(0).addClass('js_active');
  $('.js_tabs_item').eq(0).addClass('js_active');

  $('.js_tabs_menu').click( function() {
    var tab_id = $(this).attr('data-id');
    $(this).addClass('js_active').siblings().toggleClass('js_active', false);
    $('.js_tabs_item[data-id='+ tab_id + ']').toggleClass('js_active', true).siblings().toggleClass('js_active', false);
  });



});
