$(function() {
  var MOBILE_THRESHOLD = 960;
  var ACTIVE_CLASS = 'active-tab';
  var MOVED_CLASS = 'moved';
  var MOVED_SELECTOR = '.' + MOVED_CLASS;
  var $sectionPartners = $('.section-partner');
  var $convenienceSection = $('.section-convenience');
  var $careSection = $('.section-care');
  var $techSection = $('.section-tech');
  var $window = $(window);
  var originalOffset = $sectionPartners.find('ul').offset();
  var adjustedOffset = 0;

  function toggleTabDesktop(event) {
    var $target = $(event.target);
    var $container = $target.closest('.section-convenience, .section-tech');
    var $links = $container.find('a');
    var index = $target.closest('li').index();

    $target.closest('ul').attr('class', '').addClass('active-' + index);
    $links.removeClass(ACTIVE_CLASS);
    $target.addClass(ACTIVE_CLASS);
  }

  function toggleTabMobile(event) {
    var $target = $(event.target);
    var $list = $target.closest('ul');
    var $container = $target.closest('.section-convenience, .section-tech');
    var $nextItem;

    $list.attr('class', '');
    $target.addClass(ACTIVE_CLASS);
    if(event.pageX > $target.offset().left + $target.width()) {
      $nextItem = $target.closest('li').next();
    } else if(event.pageX < $target.offset().left) {
      $nextItem = $target.closest('li').prev();
    }

    if(!$nextItem || !$nextItem.length) {
      $nextItem = $target.closest('li');
    }

    $list.find('a').removeClass(ACTIVE_CLASS);
    $list.find('> li').removeClass(ACTIVE_CLASS);
    $nextItem.addClass(ACTIVE_CLASS).find('a').addClass(ACTIVE_CLASS);
  }

  function toggleTab(event) {
    if($window.width() <= MOBILE_THRESHOLD) {
      toggleTabMobile(event)
    } else {
      toggleTabDesktop(event);
    }
  }

  // FIXME also do other section
  function resizeMobileTableSection(event) {
    var $convenienceContentList = $convenienceSection.find('.content-column-inner ul > li > ul');
    var $techContentList = $techSection.find('.content-column-inner ul > li > ul');

    // revert to desktop
    if($window.width() > MOBILE_THRESHOLD) {
      $convenienceContentList.each(function() {
        var $list = $(this);
        $list.append($list.find(MOVED_SELECTOR).removeClass(MOVED_CLASS));
      });

      $techContentList.each(function() {
        var $list = $(this);
        $list.append($list.find(MOVED_SELECTOR).removeClass(MOVED_CLASS));
      });

      return;
    }

    // don't double move things
    if($convenienceContentList.find(MOVED_SELECTOR).length) {
      return;
    }

    // move description text to just after title
    $convenienceContentList.each(function() {
      var $list = $(this);
      $list.find('li:first-child').after($list.find('li:last-child').remove().addClass(MOVED_CLASS));
    }) ;

    // move description text above phone
    $techContentList.each(function() {
      var $list = $(this);
      $list.prepend($list.find('li:gt(-3)').remove().addClass(MOVED_CLASS));
    });

    $convenienceSection.find('.content-column-inner ul > li:first-child > a').trigger('click');
    $techSection.find('.content-column-inner ul > li:first-child > a').trigger('click');
  }

  // FIXME will this be the only a?
  $convenienceSection.on('click touch', 'a', toggleTab);
  $techSection.on('click touch', 'a', toggleTab);

  $convenienceSection.find('a:first').trigger('click');
  $techSection.find('a:first').trigger('click');

  $window.on('resize orientationchange', resizeMobileTableSection);
  $window.trigger('resize');
});