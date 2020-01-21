$(document).ready(function() {

  let head = window.document.getElementsByTagName('head')[0];
  function includeCSS(aFile, aRel) {
    let style = window.document.createElement('link');
    style.href = aFile;
    style.rel = aRel || 'stylesheet';
    head.appendChild(style);
  }

  includeCSS('/assets/template/css/index.css');
  includeCSS('/assets/template/css/magnific-popup.css');
  includeCSS('/assets/template/css/minishop.css');
  includeCSS('/assets/template/css/msearch.css');

});