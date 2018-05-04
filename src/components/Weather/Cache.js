import * as $ from 'jquery'

$(document).ready(function() {
    setInterval(function() {
      cache_clear()
    }, 600000);
  });
  
  function cache_clear() {
    window.location.reload(true);
  }