class Callback {

  constructor() {
    this.setEventsCallback();
  }

  sendForm(idForm) {
    var self_this = this;
    var url = "/assets/template/php/sendForm.php";
    var formData = new FormData($('#' + idForm).get(0));
    $.ajax({
      contentType: false,
      processData: false,
      data: formData,
      type:'POST',
      url: url,
      cache:false,
      beforeSend: function() {
        $('#' + idForm + ' button').prop('disabled', true);
      },
      success:function(data) {
        self_this.callbackAnimation(data, idForm);
        $('#' + idForm + ' button').prop('disabled', false);
      }
    });
  }

  callbackAnimation(check, idForm) {

    if (check === 'true') {
      var form = $('#' + idForm);
      form.fadeOut(500).delay(8000).queue(function(next) {
        form.fadeIn(500);
        form.prev().empty();
        next();
      });
      setTimeout(function() {
        form.prev().html('<p>Спасибо! Ваша заявка отправлена!</p><p>Наш менеджер свяжется с Вами в ближайшее время</p>');
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
  isPolicy(checkbox) {
    this.regex = checkbox.prop('checked');
  }

  startSend(e){
    e.preventDefault();
    var idForm = $(e.currentTarget).parents('form').attr('id');
    var inputs = $(e.currentTarget).parents('form').find('input');
    var send_check = [];
    var self_this = this;
    this.regex = true;

    $(inputs).each(function(index, item) {
      var inputName = $(item).attr('name');
      if (inputName === 'email') {
        var valueInputEmail = $(item).val();
        self_this.isEmail(valueInputEmail);
        send_check.push(self_this.regex);
      }
      else if (inputName === 'phone') {
        var valueInputPhone = $(item).val();
        self_this.isPhone(valueInputPhone);
        send_check.push(self_this.regex);
      }
      else if (inputName === 'policy') {
        self_this.isPolicy($(item));
        send_check.push(self_this.regex);
      }
      else if (inputName === 'file') {
        self_this.regex = !!$(item).val();
        send_check.push(self_this.regex);
      }
      if (self_this.regex === false) {
        animation_shake($(item));
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
      e.preventDefault();
      self_this.startSend(e);
    });
  }
}


$(document).ready(function() {
  var callbacks = new Callback();
  $('input[name=phone], input[name=phoneShipping]').usPhoneFormat({format: 'x-xxx-xxx-xxxx'});
});