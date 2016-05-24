getEvents = function() {
  eventsUrl = 'http://eventful.com/events?q=music&l=San+Diego&app-key=kNqVk4DPgGNqNWBb';
  $.getJSON(eventsUrl, function (data) { 
      console.log(data);
  }).error(function(e){
      console.log('error');
  });
}


/*
function show_alert(){
  var oArgs = {
    app_key:"kNqVk4DPgGNqNWBb",
    id: "20218701",
    page_size: 25 ,
  };

  EVDB.API.call("/events/get", oArgs, function(oData) {
    // Note: this relies on the custom toString() methods below
    console.log(data);
  });

}



function show_alert2() {

  var oArgs = {
    app_key: "kNqVk4DPgGNqNWBb",
    q: "music",
    where: "San Diego", 
    "date": "2013061000-2015062000",
    page_size: 5,
    sort_order: "popularity",
   };

   EVDB.API.call("/events/search", oArgs, function(oData) {
      // Note: this relies on the custom toString() methods below
      console.log(data);
   });

}
*/
