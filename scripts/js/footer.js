$(function() {
  var $footer = $('.primary-footer');
  var $emailSignUpForm = $footer.find('#email-signup-form');
  var $emailInput = $emailSignUpForm.find('input[type="email"]');
  var $messageLabel = $emailSignUpForm.find('label');

  // get custom mailchimp responses
  $.getJSON('/content/mailchimp.json')
  .fail(function(json){
    console.error(arguments);
  })
  .done(function(json) {

    $.ajaxChimp.translations.en_leo = json;

    $emailSignUpForm.ajaxChimp({
      language: 'en_leo',
      errorSelector: 'label',
      successSelector: 'label'
    });
  });

  $messageLabel.on('click touch', function(event) {
    $messageLabel.attr('style', '');
    $emailInput.focus();
  });

});