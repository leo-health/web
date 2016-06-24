$(function() {
  var TRACK_ATTR = 'data-ga';
  var TRACK_ATTR_SELECTOR = '[data-ga]';

  function track(event) {
    var $target = $(this);
    var trackEvent = $target.attr(TRACK_ATTR);
    if(!trackEvent.trim().length) return;
    try {
      ga('send', 'event', 'Button', 'Click', trackEvent);
    } catch(error) {
      console.error(error);
    }
  }

  $(document).on('click', TRACK_ATTR_SELECTOR, track);
});
