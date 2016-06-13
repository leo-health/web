$(function() {
  var FB_TRACK_KEYWORD = 'track';
  var TRACK_ATTR = 'data-fbq';
  var TRACK_ATTR_SELECTOR = '[data-fbq]';
  var TRACK_DATA_ATTR = TRACK_ATTR + '-data';

  function track(event) {
    var $target = $(this);
    var trackEvent = $target.attr(TRACK_ATTR);
    var trackData = $.parseJSON($target.attr(TRACK_DATA_ATTR) || '{}');

    if(!trackEvent.trim().length) {
      // bail, nothing to track
      return;
    }

    try {
      fbq(FB_TRACK_KEYWORD, trackEvent, trackData);
    } catch(error) {
      console.error(error);
    }

  }

  $(document).on('click', TRACK_ATTR_SELECTOR, track);
});