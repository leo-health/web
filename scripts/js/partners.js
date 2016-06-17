$(function() {
  var TODAY_CLASS = 'today';
  var TODAY_TIME_CLASS = 'today-time';
  var $partnerSection = $('.section-partner');
  var $infoSection = $('.section-information');
  var $allRows = $infoSection.find('table tr');

  // doing this so that we can have the image be full-width
  // ideally, we could do this with just css
  $partnerSection.find('p > img').parent().addClass('full');

  var now = new Date();
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dow = weekdays[now.getDay()];

  // FIXME this matching is a bit delicate with case/changes in labeling of the table
  var $dowColumn = $infoSection.find('th:contains(' + dow + '),td:contains(' + dow + ')');
  var dowColumnRowIndex = $allRows.index($dowColumn.closest('tr'));
  var $timeColumn = $allRows.eq(dowColumnRowIndex + 1).find('td:nth-child(' + ($dowColumn.index() + 1) + ')');

  $dowColumn.addClass(TODAY_CLASS);
  $timeColumn.addClass(TODAY_TIME_CLASS);
});