function Modals() {
  $('.js_modal_button').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 400,
    callbacks: {
      beforeOpen: function () {
      },
      open: function () {
      },
      close: function () {
      }
    }
  });
}


$(document).ready(function() {
  Modals();
});