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

    $('.js_filter_catalog_button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('js_active');
        $(this).next().children().toggleClass('js_active');
    });

});

  