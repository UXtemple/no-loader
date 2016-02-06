!function() {
  'use strict';

  // get the no-loader script tag to access its configuration
  var $el = document.getElementById('no-loader');
  // legacy file to load in case of error
  var legacy = $el.getAttribute('data-legacy') || 'legacy.js';
  // timeout after 10 minutes by default
  var timeout = $el.getAttribute('data-timeout') || 600000;

  function onError(error) {
    // Chrome and Firefox throw Script error
    // Safari throws SyntaxError
    if (/SyntaxError|Script error/.test(error.message)) {
      var script = document.createElement('script');
      script.src = legacy;
      document.getElementsByTagName('head')[0].appendChild(script);

      clearTimeout(timeoutId);
      window.removeEventListener('error', onError);
    }
  }

  window.addEventListener('error', onError);

  var timeoutId = setTimeout(function() {
    window.removeEventListener('error', onError);
  }, timeout);
}();
