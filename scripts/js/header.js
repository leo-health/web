$(function() {
  var MINI_HEADER_CLASS = 'mini';
  var $window = $(window);
  var $header = $('.primary-header');

  $window.on('scroll', function(event) {
    if($window.scrollTop() > 100) {
      $header.addClass(MINI_HEADER_CLASS);
    } else {
      $header.removeClass(MINI_HEADER_CLASS);
    }
  });
});