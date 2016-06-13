$(function() {
  var FIXED_CLASS = 'fixed';
  var ACTIVE_CLASS = 'active';
  var $fixedNav = $('.fixed-nav');
  var $indicator = $fixedNav.find('.indicator');
  var originalOffset = $fixedNav.offset();

  if(!$fixedNav.length) {
    return;
  }

  var $associatedSections = $fixedNav.find('a').map(function() {
    return $($(this).attr('href'));
  });

  function scrollToSection(event) {
    var $target = $(this.hash);
    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top - 86
      }, 500);
      return false;
    }
  }

  function toggleHeaderFixation(event) {
    var headerHeight = $('.primary-header').height();
    if($(window).scrollTop() > originalOffset.top - headerHeight) {
      $fixedNav
      .addClass(FIXED_CLASS)
      .css('top', (headerHeight + 16) + 'px');
    } else {
      $fixedNav
      .removeClass(FIXED_CLASS)
      .css('top', '0');
    }
  }

  function highlightCurrentSection(event) {
    var i;
    var $currentHighlighted = $fixedNav.find('a.' + ACTIVE_CLASS);

    for(i = 0; i < $associatedSections.length; i++) {
      var current = $associatedSections[i];
      var currentOffset = current.offset();

      // etc. - (margin + header height)
      if($(window).scrollTop()  < currentOffset.top + current.height() - 170) {
        var $targetToHighlight = $fixedNav.find('[href="#' + current.attr('id') + '"]');

        if(!$currentHighlighted.is($targetToHighlight)) {
          $fixedNav.find('a').removeClass(ACTIVE_CLASS);
          $targetToHighlight.addClass(ACTIVE_CLASS);
          $indicator.css('top', $targetToHighlight.closest('li').position().top);
        }
        break;
      }
    }
  }

  // Stop jumping to hash
  // Then scroll to hash
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
      $('a[href="' + location.hash + '"]').click();
    }, 1);
  }

  $(window).on('scroll', toggleHeaderFixation);
  $(window).on('scroll', highlightCurrentSection);
  $('a[href*="#"]:not([href="#"])').on('click', scrollToSection);
  $(window).trigger('scroll');

});