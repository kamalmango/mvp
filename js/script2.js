function callYelp() {
  // yelp uses OAuth 1.0a for authentication API requests
  // bettiolo/oauth-signature-js was used to generate the required signature
  var cityStr = $('.city').val();
  console.log(cityStr);
  //function that genearates a random number so that API call works multiple times 
  function nonce_generate(){
    return (Math.floor(Math.random() * 1e12).toString());
  } 

  var yelp_url = 'http://api.yelp.com/v2/search';
  
  var parameters = {
    //location: 'washington+dc',
    location: cityStr,
    oauth_consumer_key: 'HKEEu2MdseoJv8QK4GKyig',
    oauth_token: '4En18EFYgqBLZm9yWtJeLOIGYEGx4xIq',
    oauth_nonce: nonce_generate(),
    oauth_timestamp: Math.floor(Date.now()/1000),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version : '1.0',
    callback: 'cb'              
  };

  var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, 'Qym8Yfq-k2ZGs2FFyNjK2ARWV40', 'HAmaTHm9-5CiLtfJ6xrZzN_N_78');
  parameters.oauth_signature = encodedSignature;

  var settings = {
    url: yelp_url,
    data: parameters,
    cache: true,                
    dataType: 'jsonp',
    jsonpCallback: 'cb',

    // funciton for parsing the API JSON results
    success: function(results) {
      /*
     for (var i = 0; i < results.businesses.length; i++) {
       place = {}; //place object that will hold the neccessary information from the yelp results
       var image = results.businesses[i].image_url;
       place.name = results.businesses[i].name;
       place.id = i + 1;
       place.location = {
         'lat' : results.businesses[i].location.coordinate.latitude,
         'lng' : results.businesses[i].location.coordinate.longitude
       };
       place.image = image.replace('ms', 'l'); // get larger yelp image by replacing ms with l in the returned url
       place.ratingImage = results.businesses[i].rating_img_url;
       place.reviewSnippet = results.businesses[i].snippet_text;
       place.reviewUrl = results.businesses[i].url;
       place.address = results.businesses[i].location.display_address[0] + ', ' + results.businesses[i].location.display_address[1];
    },
    */
      for (var i=0; i < results.businesses.length; i++) {
        var result = results.businesses[i];
        $('#nyArticles').append('<ul class="article">' +
           '<p>' + result.name + '</p>'+
           '<p>' + result.snippet_text + '</p>'+
        '</ul>');
      };
    },
    // function for if the API call to Yelp fails for any reason (ex. no internet)
    error: function() {
      alert('Sorry, Yelp information not available at the moment');
    }
  };
  $.ajax(settings);
}


$('.city').keypress(function(e) {
  if(e.which == 13) {
    callYelp();
    $('.city').val('');
  }
});

/*
for (var i=0; i < articles.length; i++) {
  var article = articles[i];
  $('#nyArticles').append('<ul class="article">' +
      '<a href="'+article.web_url+'">'+article.headline.main+
          '</a>'+
      '<p>' + article.snippet + '</p>'+
  '</ul>');
};
*/