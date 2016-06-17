$(function() {
  var MOBILE_THRESHOLD_LARGE = 960;
  var MOBILE_THRESHOLD_SMALL = 480;

  var $window = $(window);
  var isSmall = $window.width() < MOBILE_THRESHOLD_SMALL;
  var isLarge = !isSmall && $window.width() < MOBILE_THRESHOLD_LARGE;

  var $pages = $('.home, .how-it-works');

  function makeFirstSectionHeightOfWindow(event) {
    if(isSmall) {
      $pages.find('.primary-content section:first-child').height($window.height());
    }
  }

  $window.on('resize orientationchange', makeFirstSectionHeightOfWindow);
  $window.trigger('resize');
});