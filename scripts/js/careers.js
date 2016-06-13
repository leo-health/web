$(function() {
  var REVEAL_CLASS = 'reveal';
  var FIXED_CLASS = 'fixed';
  var $careersSection = $('.section-careers');
  var $careersNav = $('.careers-nav');

  var lightbox = lity();

  if(!$careersSection.length) {
    return;
  }

  function revealCareer(event) {
    var $this = $(this);
    var $post = $this.closest('.post-career');

    if(!$post.hasClass(REVEAL_CLASS)) {
      $careersSection.find('.post-career').removeClass(REVEAL_CLASS);
    }

    $post.toggleClass(REVEAL_CLASS);
  }

  $careersSection.on('click', '.post-career h2', revealCareer);
});