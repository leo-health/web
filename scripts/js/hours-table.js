$(function() {
  var MOBILE_THRESHOLD = 960;
  var REFORMATTED_CLASS = 'reformatted';
  var REFORMATTED_SELECTOR = '.' + REFORMATTED_CLASS;
  var $table = $('.section-information table');

  if(!$table.length) {
    return;
  }

  function reformatTable(event) {
    var $reformattedColumns = $table.find(REFORMATTED_SELECTOR);

    if($(this).width() <= MOBILE_THRESHOLD && !$reformattedColumns.length) {
      var $newRows = $table
        .find('tr th:last-child, tr td:last-child')
        .remove()
        .addClass(REFORMATTED_CLASS)
        .wrap('<tr/>')
        .closest('tr');

      // remove empty remove rows
      $table.find('td:empty').closest('tr').remove();
      // add new rows to table
      $table.find('tbody').append($newRows);
    } else if($(this).width() > MOBILE_THRESHOLD) {
      var $reformattedRows = $reformattedColumns
        .removeClass(REFORMATTED_CLASS)
        .closest('tr')
        .remove();
      var $tableRows = $table.find('tr');

      $reformattedRows.each(function(index) {
        var $cRow = $tableRows.eq(index);

        // if we have a row that doesn't have an
        // existing corresponding row, make one
        // and fill it with a column to equalize it
        if(!$cRow.length) {
          $cRow = $('<tr><td></td></tr>');
          $table.append($cRow);
        }

        $cRow.append($(this).children());
      });
    }
  }

  $(window).on('resize', reformatTable);
  $(window).trigger('resize');
});