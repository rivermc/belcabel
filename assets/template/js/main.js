'use strict';

/* ----------------------------------------------------------------------- */
/* Get Module Function */
/* ----------------------------------------------------------------------- */

function getModule(action, module, params, cb, delimiter = ',') {
    $.ajax({
        type:'POST',
        url:"/assets/template/php/getModule.php",
        data:'action=' + action + '&chunk=' + module + '&params=' + params + '&delimiter=' + delimiter,
        cache:false,
        success:function(data) {
            cb(data);
        }
    });
}


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

});

  