function events() {
  $('#nyArticles').html('');
  if ($('.city').val() === 'Jordan') {
    $('#nyArticles').append('<p class="events"> You\'re in luck, Jordan is an awesome place :)</p>');
  } else if ($('.city').val() === 'Kuwait') {
    $('#nyArticles').append('<p class="events"> Oh no, there\'s absolutely nothing to do here :( </p>');
  }
}

$('.city').keypress(function(e) {
  if(e.which == 13) {
    events();
    $('.city').val('');
  }
});

