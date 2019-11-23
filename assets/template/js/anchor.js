'use strict';

$(document).ready(function() {

  $('.js_anchor').click(function (e) {
    e.preventDefault();
    let scroll = $(this).attr('href');
    if ($(this).hasClass('js_anchor_contact') && $(scroll).length === 0) {
      $('.header__top_menu li').eq(3).find('a').trigger('click');
      return;
    }
    if ($(this).hasClass('js_anchor_character')) {
      $('.js_tabs_menu').eq(0).trigger('click');
    }
    $('body, html').animate({
      scrollTop: $(scroll).offset().top
    }, 400);
  });

});