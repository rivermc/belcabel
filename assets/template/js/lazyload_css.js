$(document).ready(function() {

  let head = window.document.getElementsByTagName('head')[0];
  function includeCSS(aFile, aRel) {
    let style = window.document.createElement('link');
    style.href = aFile;
    style.rel = aRel || 'stylesheet';
    head.appendChild(style);
    var preloader = $('.preloader');

    setTimeout(() => {
      preloader.css({'opacity': '0', 'visibility' : 'hidden'});
    }, 400);

  }

  includeCSS('/assets/template/css/index.css');
  includeCSS('/assets/template/css/magnific-popup.css');
  includeCSS('/assets/template/css/minishop.css');
  includeCSS('/assets/template/css/msearch.css');

});