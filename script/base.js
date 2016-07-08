$(document).ready(
  function()
  {
    $("a").on('click', function(event)  //track event
    {
      if (this.hash !== "") //check if location is not null
      {
        event.preventDefault(); //prevent default behaviour
        var hash = this.hash; //store location in variable
        $('html, body').animate( //animate to that location
        {
          scrollTop: $(hash).offset().top
        }, 500, function(){ // will take 800 miliseconds to go to the location
          window.location.hash = hash;
        });
      } 
    });
});


var onResize = function() {
  $("body").css("padding-top", $(".navbar-fixed-top").height()); //dynamic padding according to navbar
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function() {
  onResize();
});