class Callback {

  constructor() {
    this.regex = true;
    this.setEventsCallback();
  }

  sendForm(idForm) {
    var msg=$('#' + idForm).serialize();
    var self_this = this;
    $.ajax({
      type:'POST',
      url:"/assets/template/php/sendForm.php",
      data:msg,
      cache:false,
      beforeSend: function() {
        $('#' + idForm + ' button').prop('disabled', true);
        self_this.callbackAnimation('true', idForm);
      },
      success:function(data) {
        self_this.callbackAnimation(data, idForm);
        $('#' + idForm + ' button').prop('disabled', false);
      }
    });
  }

  callbackAnimation(check, idForm) {

    if (check === 'true') {
      $('#' + idForm).fadeOut(500).delay(8000).queue(function(next) {
        $('#' + idForm).fadeIn(500);
        $('#' + idForm).prev().empty();
        next();
      });
      setTimeout(function() {
        $('#' + idForm).prev().html('<p>Спасибо! Ваша заявка отправлена!</p><p>Наш менеджер свяжется с Вами в ближайшее время</p>');
      },500);
    }
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    this.regex = regex.test(email);
  }

  isPhone(phone) {
    var regex = /^\+?([\d]{1})\)?[- ]*[( ]*?([\d]{3})?[) ]*[- ]?([\d]{3})[- ]?([\d]{2})[- ]?([\d]{2})$/;
    this.regex = regex.test(phone);
  }

  startSend(e){
    e.preventDefault();
    var idForm = $(e.currentTarget).parents('form').attr('id');
    var inputs = $(e.currentTarget).parents('form').find('input');
    var send_check = [];
    var self_this = this;

    $(inputs).each(function(index, item) {
      var inputName = $(item).attr('name');
      if ( inputName === 'email') {
        var valueInputEmail = $(item).val();
        self_this.isEmail(valueInputEmail);
        send_check.push(self_this.regex);
      }
      else if (inputName === 'phone') {
        var valueInputPhone = $(item).val();
        self_this.isPhone(valueInputPhone);
        send_check.push(self_this.regex);
      }
      if (self_this.regex === false) {
        $('#' + idForm + ' .callback__form_group_input_' + $(item).attr('name')).addClass('shake').delay(800).queue(function(next){ $('#' + idForm + ' .callback__form_group_input_' + $(item).attr('name')).removeClass('shake');  next(); });
      }
    });
    send_check.forEach(function(check){
      if (check === false) {
        self_this.regex = false;
      }
    });
    if (self_this.regex === true) {
      this.sendForm(idForm);
    }
  }

  setEventsCallback() {
    var self_this = this;
    var buttons = $('.callback button');
    buttons.off('click');
    buttons.on('click', function(e) {
      self_this.startSend(e);
    });
  }
}

var callbacks = new Callback();

$(document).ready(function() {
  $('input[name=phone], input[name=phoneShipping]').usPhoneFormat({format: 'x-xxx-xxx-xxxx'});
});