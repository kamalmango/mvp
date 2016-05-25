function loadData() {
  var cityStr = $('.city').val();
  if (cityStr === 'the middle east') {
    $('body').html('');
    //$('body').css('background-color', 'red');
    $('body').addClass('red');
    $('body').append('<p id="exclamation">!!!!!!!!!!!!!!!!!</p>');
    return
  }
  var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=75fc95c73248ef1a199848807d863429:4:72607405';
  $('#nyArticles').text('');
  $.getJSON(nytimesUrl, function (data) { 
      articles = data.response.docs;
      for (var i=0; i < articles.length; i++) {
        var article = articles[i];
        $('#nyArticles').append('<ul class="article">' +
            '<a class="title" href="'+article.web_url+'">'+article.headline.main+
                '</a>'+
            '<p>' + article.snippet + '</p>'+
        '</ul>');
      };
  }).error(function(e){
      console.log('error');
  });
}

$('.city').keypress(function(e) {
  if(e.which == 13) {
    loadData();
    $('.city').val('');
  }
});

