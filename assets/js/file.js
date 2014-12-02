$( document ).ready(function() {

    $( "#blog" ).click(function() {
 
     	alert( "This page is currently under construction" );
 });
	$( "#photos" ).click(function() {
 
     	alert( "This page is currently under construction" );
     	
  
});
	$( ".name" ).hover(
  function() {
    $( ".name" ).css( "font-weight", "900" );
  }, function() {
    $( ".name" ).css( "font-weight", "200" );
  }
);

  $("#button").click(function() {
    if ($("#secondparagraph").is(":visible")) {
      $("#secondparagraph").slideUp();
      $("#button-text").text("See More");
    }

    else {
      $("#secondparagraph").slideDown();
      $("#button-text").text("See Less");

    }
  });

});
 
   
 
