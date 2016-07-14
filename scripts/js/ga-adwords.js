$(function() {
  var TRACK_ATTR = 'data-ga';
  var TRACK_ATTR_SELECTOR = '[data-ga]';
  function trackClick(event) {
    var $target = $(this);
    var trackEvent = $target.attr(TRACK_ATTR);
    if(trackEvent === "homepage_consult"){
      goog_report_conversion ('https://provider.leohealth.com/registration')
    }else if(trackEvent === "homepage_enroll"){
      goog_report_conversion ('https://provider.leohealth.com/join-leo')
    }else{
      return
    }
  }

  $(document).on('click', TRACK_ATTR_SELECTOR, trackClick);
});
