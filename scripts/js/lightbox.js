$(function() {
  var SCROLL_CLASS = 'no-scroll';

  function toggleScroll(event, lightbox, trigger) {
    $('body').toggleClass(SCROLL_CLASS);
  }

  $(document).on('lity:open', toggleScroll);
  $(document).on('lity:remove', toggleScroll);
});