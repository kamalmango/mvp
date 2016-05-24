
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    $('.list').toggleClass('hide');
    this.classList.toggle( "active" );
    
});