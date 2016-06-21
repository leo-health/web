$(function() {
  var REVEAL_CLASS = 'reveal';
  var FIXED_CLASS = 'fixed';
  var $careersSection = $('.section-careers');
  var $hashLink = $('a[href="' + location.hash + '"]');

  if(!$careersSection.length) {
    return;
  }

  function scrollAndRevealCareer($link) {
    if (!$link.length) {
      return;
    }

    // - height of mini header - some padding
    $('html, body').animate({
      scrollTop: $link.offset().top - 80
    }, 500);
  }

  function revealCareer(event) {
    var $this = $(this);
    var $post = $this.closest('.post-career');

    event.preventDefault();

    if(!$post.hasClass(REVEAL_CLASS)) {
      $careersSection.find('.post-career').removeClass(REVEAL_CLASS);
    }

    $post.toggleClass(REVEAL_CLASS);
  }

  if ($hashLink.length) {
    setTimeout(function() {
      window.scrollTo(0, 0);
      scrollAndRevealCareer($hashLink);
    }, 1);
  }

  $careersSection.on('click', '.career-deep-link', revealCareer);
});