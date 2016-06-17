$(function() {
  var $circleImages = $('.column-3 .content-column-inner > p:first-child img');
  var $teamImages = $('.section-team, .section-advisors').find('.content-column-inner > ul > li > img');

  /**
   * Center the image within the circle horizontally or vertically
   * depending on the size of the image.
   */
  function formatCircleImage(event) {
    var th = $(this).parent().height(),
        tw = $(this).parent().width(),
        im = $(this),
        ih = im.height(),
        iw = im.width();
    if (ih > iw) {
        im.addClass('ww').removeClass('wh');
    } else {
        im.addClass('wh').removeClass('ww');
    }

    var nh = im.height(),
        nw = im.width(),
        hd = (nh-th)/2,
        wd = (nw-tw)/2;
    if (nh<nw) {
        im.css({
          left: '-' + wd + 'px',
          top: 0
        });
    } else {
        // horizonal centering handled by CSS
    }
  }

  /**
   * Vertically center meta information for list of team photos.
   */
  function verticallyCenter(event) {
    var $this = $(this);
    var $list = $this.next();
    var totalHeight = 0;

    $list.find('li').each(function(){ totalHeight += $(this).outerHeight(true) });
    $list.css({
      'padding-top': ($list.height() - totalHeight)/2 + "px"
    });

    // force browser to reflow
    $list.parent().closest('ul').hide().show(0);
  }

  $circleImages.on('load', formatCircleImage);
  $circleImages.trigger('load');

  $teamImages.on('leo.verticallyenter', verticallyCenter);
  $(window).on('load', function(event) { $teamImages.trigger('leo.verticallyenter'); });
  $('.join-leo .primary-content p, .join-leo .primary-content li').widowFix();
});
